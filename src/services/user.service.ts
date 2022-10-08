import CommonResponse from "../utils/response.util";
import User from "../models/tables/User";
import { AddUserDTO } from "../models/dto/UserDTO";

class UserService extends CommonResponse {
  //get all record
  async getUser() {
    try {
      let exist = await User.findAll();
      if (exist.length != 0) {
        return this.RESPONSE(200, exist, 0, "Users found.");
      } else {
        return this.RESPONSE(404, [], 0, "Users not found.");
      }
    } catch (error: any) {
      return this.RESPONSE(500, [], 0, "Internal Server Error!");
    }
  }

  //get one record
  async getOneData(dto: AddUserDTO["requestObject"]) {
    try {
      let exist = await User.findOne({ where: { id: dto } });
      if (exist !== null) {
        return this.RESPONSE(200, exist, 0, "User found.");
      } else {
        return this.RESPONSE(404, {}, 0, "No user found.");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, 0, "Internal Server Error!");
    }
  }

  //create data
  async createUser(dto: AddUserDTO["requestObject"]) {
    try {
      let exist = await User.findOne({ where: { name: dto.name } });
      if (exist == null) {
        let response = await User.create({ ...dto });
        if (response !== null) {
          return this.RESPONSE(200, response, 0, "User created successfully.");
        } else {
          return this.RESPONSE(400, {}, 0, "Failed to create user.");
        }
      } else {
        return this.RESPONSE(200, exist, 0, "User already exist.");
      }
    } catch (error: any) {
      return this.RESPONSE(500, [], 0, "Internal Server Error!");
    }
  }

  //update data
  async updateUser(dto: AddUserDTO["requestObject"]) {
    try {
      let exist = await User.findOne({ where: { id: dto.id } });
      if (exist != null) {
        let updateData = await User.update(dto, {
          where: { id: dto.id },
        });
        if (updateData != null) {
          return this.RESPONSE(
            202,
            updateData,
            0,
            "User updated successfully."
          );
        } else {
          return this.RESPONSE(400, {}, 0, "Failed to update user.");
        }
      } else {
        return this.RESPONSE(404, {}, 0, "User not found.");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, 0, "Internal Server Error!");
    }
  }

  //delete data
  async deleteUser(dto: AddUserDTO["requestObject"]) {
    try {
      let exist = await User.findOne({ where: { id: dto } });
      if (exist != null) {
        let removeData = await User.destroy({ where: { id: dto } });
        if (removeData != null) {
          return this.RESPONSE(200, {}, 0, "User deleted successfully.");
        } else {
          return this.RESPONSE(400, {}, 0, "Failed to delete user.");
        }
      } else {
        return this.RESPONSE(404, {}, 0, "User not found.");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, 0, "Internal Server Error!");
    }
  }
}

export default new UserService();
