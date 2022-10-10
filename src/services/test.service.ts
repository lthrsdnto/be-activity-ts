import CommonResponse from "../utils/response.util";
import Test from "../models/tables/Test";
import { AddTestDTO } from "../models/dto/TestDTO";
import { Op } from "sequelize";

class TestService extends CommonResponse {
  //or
  async getTestOr(id: number) {
    try {
      let exist = await Test.findOne({
        where: { id: { [Op.or]: [1, 2, id] } },
      });
      if (exist != null) {
        return this.RESPONSE(200, exist, 0, "Record found successfully");
      } else {
        return this.RESPONSE(404, {}, 0, "Record not found");
      }
    } catch (err: any) {
      return this.RESPONSE(500, err, 0, "Internal Server Error!");
    }
  }

  //and
  async getTestAndOp(id: number) {
    try {
      let exist = await Test.findAll({
        where: { id: { [Op.and]: [{ id: id }, { name: null }] } },
      });
      if (exist != null) {
        return this.RESPONSE(200, exist, 0, "Record found successfully");
      } else {
        return this.RESPONSE(404, {}, 0, "Record not found");
      }
    } catch (err: any) {
      return this.RESPONSE(500, err, 0, "Internal Server Error!");
    }
  }

  //greater than
  async getTestGreaterThan() {
    try {
      let exist = await Test.findAll({
        where: { id: { [Op.gt]: 5 } },
      });
      let count: number = await Test.count({
        where: { id: { [Op.gt]: 5 } },
      });
      if (exist.length != 0) {
        return this.RESPONSE(200, exist, count, "Record found successfully");
      } else {
        return this.RESPONSE(404, {}, 0, "Record not found");
      }
    } catch (err: any) {
      return this.RESPONSE(500, err, 0, "Internal Server Error!");
    }
  }

  //less than
  async getTestLessThan() {
    try {
      let exist = await Test.findAll({
        where: { id: { [Op.lt]: 5 } },
      });
      let count: number = await Test.count({
        where: { id: { [Op.lt]: 5 } },
      });
      if (exist.length != 0) {
        return this.RESPONSE(200, exist, count, "Record found successfully");
      } else {
        return this.RESPONSE(404, {}, 0, "Record not found");
      }
    } catch (err: any) {
      return this.RESPONSE(500, err, 0, "Internal Server Error!");
    }
  }

  //not equal
  async getTestNotOpFindAll(id: number) {
    try {
      let exist = await Test.findAll({
        where: {
          id: { [Op.ne]: id },
        },
      });
      if (exist.length != 0) {
        return this.RESPONSE(200, exist, 0, "Record found successfully");
      } else {
        return this.RESPONSE(404, {}, 0, "Record not found");
      }
    } catch (err: any) {
      return this.RESPONSE(500, err, 0, "Internal Server Error!");
    }
  }

  //ilike
  async getTestILikeOpFindAll(name: string) {
    try {
      let exist = await Test.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
      });
      if (exist.length != 0) {
        return this.RESPONSE(200, exist, 0, "Record found successfully");
      } else {
        return this.RESPONSE(404, {}, 0, "Record not found");
      }
    } catch (err: any) {
      return this.RESPONSE(500, err, 0, "Internal Server Error!");
    }
  }

  //notilike
  async getTestNotILike(name: string) {
    try {
      let exist = await Test.findAll({
        where: {
          name: { [Op.notILike]: `%${name}%` },
        },
      });
      if (exist.length != 0) {
        return this.RESPONSE(200, exist, 0, "Record found successfully");
      } else {
        return this.RESPONSE(404, {}, 0, "Record not found");
      }
    } catch (err: any) {
      return this.RESPONSE(500, err, 0, "Internal Server Error!");
    }
  }

  //like
  async getTestLike(name: string) {
    try {
      let exist = await Test.findAll({
        where: {
          name: { [Op.like]: `%${name}%` },
        },
      });
      if (exist.length != 0) {
        return this.RESPONSE(200, exist, 0, "Record found successfully");
      } else {
        return this.RESPONSE(404, {}, 0, "Record not found");
      }
    } catch (err: any) {
      return this.RESPONSE(500, err, 0, "Internal Server Error!");
    }
  }

  //notlike
  async getTestNotLike(name: string) {
    try {
      let exist = await Test.findAll({
        where: {
          name: { [Op.notLike]: `%${name}%` },
        },
      });
      if (exist.length != 0) {
        return this.RESPONSE(200, exist, 0, "Record found successfully");
      } else {
        return this.RESPONSE(404, {}, 0, "Record not found");
      }
    } catch (err: any) {
      return this.RESPONSE(500, err, 0, "Internal Server Error!");
    }
  }

  //startswith
  async getStartsWith(name: string) {
    try {
      let exist = await Test.findAll({
        where: {
          name: { [Op.startsWith]: `%${name}%` },
        },
      });
      if (exist.length != 0) {
        return this.RESPONSE(200, exist, 0, "Record found successfully");
      } else {
        return this.RESPONSE(404, {}, 0, "Record not found");
      }
    } catch (err: any) {
      return this.RESPONSE(500, err, 0, "Internal Server Error!");
    }
  }

  //endswith
  async getEndsWith(name: string) {
    try {
      let exist = await Test.findAll({
        where: {
          name: { [Op.endsWith]: `%${name}%` },
        },
      });
      if (exist.length != 0) {
        return this.RESPONSE(200, exist, 0, "Record found successfully");
      } else {
        return this.RESPONSE(404, {}, 0, "Record not found");
      }
    } catch (err: any) {
      return this.RESPONSE(500, err, 0, "Internal Server Error!");
    }
  }

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
    } catch (err: any) {
      return this.RESPONSE(500, err, 0, "Internal Server Error");
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
    } catch (err: any) {
      return this.RESPONSE(500, err, 0, "Internal Server Error!");
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
    } catch (err: any) {
      return this.RESPONSE(500, err, 0, "Internal Server Error!");
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
    } catch (err: any) {
      return this.RESPONSE(500, err, 0, "Internal Server Error!");
    }
  }
}

export default new TestService();
