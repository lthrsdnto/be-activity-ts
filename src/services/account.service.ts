import { AddUserDTO } from "../models/dto/UserDTO";
import Account from "../models/tables/Account";
const dotenv = require("dotenv").config();
const CommonResponse = require("../utils/response.util");
const bcrypt = require("bcrypt");
const AuthService = require("./auth.service");

class AccountService extends CommonResponse {
  async login(dto: AddUserDTO["requestObject"]) {
    try {
      let exist = await Account.findOne({
        where: { username: dto.username },
      });
      if (exist != null) {
        let passwordConfirm = await bcrypt.compare(
          dto.password,
          exist["getDataValue"].password
        );
        if (passwordConfirm == true) {
          console.log(exist["getDataValue"]);
          let token = await AuthService.auth(exist["getDataValue"]);
          return this.RESPONSE(200, token.response, "Signed in successfully");
        } else {
          return this.RESPONSE(400, {}, "Incorrect username or password");
        }
      } else {
        return this.RESPONSE(400, {}, "Bad request");
      }
    } catch (err) {
      return this.RESPONSE(500, err, "Internal Server Error");
    }
  }

  async signup(dto: AddUserDTO["requestObject"]) {
    try {
      if (dto != null) {
        let exist = await Account.findOne({
          where: { username: dto.username },
        });
        if (exist != null) {
          return this.RESPONSE(400, {}, "User already exists.");
        }
        if (dto.password == dto.confirmPassword) {
          let hashPassword = await bcrypt.hash(dto.password, 10);
          let response = await Account.create({
            username: dto.username,
            password: hashPassword,
            is_active: true,
          });

          if (response != null) {
            return this.RESPONSE(200, response, "Signed up successfully.");
          } else {
            return this.RESPONSE(400, {}, "Bad request");
          }
        } else {
          return this.RESPONSE(400, {}, "Bad request");
        }
      } else {
        return this.RESPONSE(400, {}, "Bad request");
      }
    } catch (err) {
      return this.RESPONSE(500, err);
    }
  }
}

export default new AccountService();
