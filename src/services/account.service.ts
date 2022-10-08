import { AddUserDTO } from "../models/dto/UserDTO";
import Account from "../models/tables/Account";
import CommonResponse from "../utils/response.util";
import dotenv, { DotenvConfigOutput } from 'dotenv';
import AuthService from "./auth.service";
const env_config: DotenvConfigOutput = dotenv.config();
const bcrypt = require("bcrypt");


class AccountService extends CommonResponse {
  async login(dto: AddUserDTO["requestObject"]) {
    try {
      let exist = await Account.findOne({
        where: { username: dto.username },
      });
      if (exist != null) {
        let passwordConfirm = await bcrypt.compare(
          dto.password,
           exist.password
        );
        if (passwordConfirm == true) {
          console.log( exist.password);
          let token = await AuthService.auth( exist.password);
          return this.RESPONSE(200, token.response,0, "Signed in successfully");
        } else {
          return this.RESPONSE(400, {}, 0,"Incorrect username or password");
        }
      } else {
        return this.RESPONSE(400, {}, 0,"Bad request");
      }
    } catch (err) {
      return this.RESPONSE(500, err,0, "Internal Server Error");
    }
  }

  async signup(dto: AddUserDTO["requestObject"]) {
    try {
      if (dto != null) {
        let exist = await Account.findOne({
          where: { username: dto.username },
        });
        if (exist != null) {
          return this.RESPONSE(400, {},0, "User already exists.");
        }
        if (dto.password == dto.confirmPassword) {
          let hashPassword = await bcrypt.hash(dto.password, 10);
      
          let response = await Account.create({
            ...dto,
            username: dto.username,
            password: hashPassword,
            is_active: true,

            
          });

          if (response != null) {
            return this.RESPONSE(200, response,0,"Signed up successfully.");
          } else {
            return this.RESPONSE(400, {},0, "Bad request");
          }
        } else {
          return this.RESPONSE(400, {}, 0,"Bad request");
        }
      } else {
        return this.RESPONSE(400, {},0, "Bad request");
      }
    } catch (err) {
      return this.RESPONSE(500, err);
    }
  }
}

export default new AccountService();
