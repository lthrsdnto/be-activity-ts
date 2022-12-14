import CommonResponse from "../utils/response.util";
import Info from "../models/tables/Info";
import { AddInfoDTO } from "../models/dto/InfoDTO";
import Task from "../models/tables/Task";
import User from "../models/tables/User";

class InfoService extends CommonResponse {
  async getInfo() {
    try {
      let exist = await User.findAll({
        include: [Info, Task],
      });
      if (exist.length != 0) {
        return this.RESPONSE(200, exist, 0, "User record found.");
      } else {
        return this.RESPONSE(404, [], 0, "No record found.");
      }
    } catch (error: any) {
      return this.RESPONSE(500, [], 0, "Internal Server Error!");
    }
  }

  //get one record
  async getOneData(dto: AddInfoDTO["requestObject"]) {
    try {
      let exist = await Info.findOne({ where: { id: dto } });
      if (exist !== null) {
        return this.RESPONSE(200, exist, 0, "User record found.");
      } else {
        return this.RESPONSE(404, {}, 0, "No record found.");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, 0, "Internal Server Error!");
    }
  }

  //create data
  async createInfo(dto: AddInfoDTO["requestObject"]) {
    try {
      let exist = await Info.findOne({ where: { email: dto.email } });
      if (exist == null) {
        let response = await Info.create({ ...dto });
        if (response !== null) {
          return this.RESPONSE(200, response, 0, "User information created.");
        } else {
          return this.RESPONSE(400, {}, 0, "Failed to create record.");
        }
      } else {
        return this.RESPONSE(200, exist, 0, "User information already exist.");
      }
    } catch (error: any) {
      return this.RESPONSE(500, [], 0, "Internal Server Error!");
    }
  }

  //update data
  async updateInfo(dto: AddInfoDTO["requestObject"]) {
    try {
      let exist = await Info.findOne({ where: { id: dto.id } });
      if (exist != null) {
        let updateData = await Info.update(dto, {
          where: { id: dto.id },
        });
        if (updateData != null) {
          return this.RESPONSE(202, updateData, 0, "User information updated.");
        } else {
          return this.RESPONSE(400, {}, 0, "Failed to update record.");
        }
      } else {
        return this.RESPONSE(404, {}, 0, "User information not found.");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, 0, "Internal Server Error!");
    }
  }

  //delete data
  async deleteInfo(dto: AddInfoDTO["requestObject"]) {
    try {
      let exist = await Info.findOne({ where: { id: dto } });
      if (exist != null) {
        let removeData = await Info.destroy({ where: { id: dto } });
        if (removeData != null) {
          return this.RESPONSE(200, {}, 0, "User information deleted.");
        } else {
          return this.RESPONSE(400, {}, 0, "Failed to delete data.");
        }
      } else {
        return this.RESPONSE(404, {}, 0, "Record not found.");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, 0, "Internal Server Error!");
    }
  }
}

export default new InfoService();
