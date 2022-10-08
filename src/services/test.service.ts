import CommonResponse from "../utils/response.util";
import Test from "../models/tables/Test";
import { AddTestDTO } from "../models/dto/TestDTO";

class TestService extends CommonResponse {
  //get all record
  async getTest() {
    try {
      let exist = await Test.findAll();
      if (exist.length != 0) {
        return this.RESPONSE(200, exist, 0, "Record Found Successfully!");
      } else {
        return this.RESPONSE(404, [], 0, "No Record Found!");
      }
    } catch (error: any) {
      return this.RESPONSE(500, [], 0, "Internal Server Error!");
    }
  }

  //get one record
  async getOneData(dto: AddTestDTO["requestObject"]) {
    try {
      let exist = await Test.findOne({ where: { id: dto } });
      if (exist !== null) {
        return this.RESPONSE(200, exist, 0, "Record found");
      } else {
        return this.RESPONSE(404, {}, 0, "No record found");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, 0, "Internal Server Error");
    }
  }

  //create data
  async createTest(dto: AddTestDTO["requestObject"]) {
    try {
      let exist = await Test.findOne({ where: { name: dto.name } });
      if (exist == null) {
        let response = await Test.create({ ...dto });
        if (response !== null) {
          return this.RESPONSE(200, response, 0, "Created successfully");
        } else {
          return this.RESPONSE(400, {}, 0, "Failed to create record");
        }
      } else {
        return this.RESPONSE(200, exist, 0, "Already exist");
      }
    } catch (error: any) {
      return this.RESPONSE(500, [], 0, "Internal Server Error!");
    }
  }

  //update data
  async updateTest(dto: AddTestDTO["requestObject"]) {
    try {
      let exist = await Test.findOne({ where: { id: dto.id } });
      if (exist != null) {
        let updateData = await Test.update(dto, {
          where: { id: dto.id },
        });
        if (updateData != null) {
          return this.RESPONSE(202, updateData, 0, "Successfully updated");
        } else {
          return this.RESPONSE(400, {}, 0, "Failed to update data");
        }
      } else {
        return this.RESPONSE(404, {}, 0, "Record not found");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, 0, "Internal Server Error!");
    }
  }

  //delete data
  async deleteTest(dto: AddTestDTO["requestObject"]) {
    try {
      let exist = await Test.findOne({ where: { id: dto } });
      if (exist != null) {
        let removeData = await Test.destroy({ where: { id: dto } });
        if (removeData != null) {
          return this.RESPONSE(200, {}, 0, "Successfully deleted");
        } else {
          return this.RESPONSE(400, {}, 0, "Failed to delete data");
        }
      } else {
        return this.RESPONSE(404, {}, 0, "Record not found");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, 0, "Internal Server Error!");
    }
  }
}

export default new TestService();
