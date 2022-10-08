import CommonResponse from "../utils/response.util";
import Task from "../models/tables/Task";
import { AddTaskDTO } from "../models/dto/TaskDTO";

class TaskService extends CommonResponse {
  //get all record
  async getTask() {
    try {
      let exist = await Task.findAll();
      if (exist.length != 0) {
        return this.RESPONSE(200, exist, 0, "Task found successfully.");
      } else {
        return this.RESPONSE(404, [], 0, "Task not found.");
      }
    } catch (error: any) {
      return this.RESPONSE(500, [], 0, "Internal Server Error!");
    }
  }

  //get one record
  async getOneData(dto: AddTaskDTO["requestObject"]) {
    try {
      let exist = await Task.findOne({ where: { id: dto } });
      if (exist !== null) {
        return this.RESPONSE(200, exist, 0, "One task found.");
      } else {
        return this.RESPONSE(404, {}, 0, "Task not found.");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, 0, "Internal Server Error!");
    }
  }

  //create data
  async createTask(dto: AddTaskDTO["requestObject"]) {
    try {
      let exist = await Task.findOne({ where: { todo: dto.todo } });
      if (exist == null) {
        let response = await Task.create({ ...dto });
        if (response !== null) {
          return this.RESPONSE(200, response, 0, "Task created successfully.");
        } else {
          return this.RESPONSE(400, {}, 0, "Failed to create task.");
        }
      } else {
        return this.RESPONSE(200, exist, 0, "Todo task already exists.");
      }
    } catch (error: any) {
      return this.RESPONSE(500, [], 0, "Internal Server Error!");
    }
  }

  //update data
  async updateTask(dto: AddTaskDTO["requestObject"]) {
    try {
      let exist = await Task.findOne({ where: { id: dto.id } });
      if (exist != null) {
        let updateData = await Task.update(dto, {
          where: { id: dto.id },
        });
        if (updateData != null) {
          return this.RESPONSE(
            202,
            updateData,
            0,
            "Task updated successfully."
          );
        } else {
          return this.RESPONSE(400, {}, 0, "Failed to update task.");
        }
      } else {
        return this.RESPONSE(404, {}, 0, "Task not found.");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, 0, "Internal Server Error!");
    }
  }

  //delete data
  async deleteTask(dto: AddTaskDTO["requestObject"]) {
    try {
      let exist = await Task.findOne({ where: { id: dto } });
      if (exist != null) {
        let removeData = await Task.destroy({ where: { id: dto } });
        if (removeData != null) {
          return this.RESPONSE(200, {}, 0, "Task deleted successfully.");
        } else {
          return this.RESPONSE(400, {}, 0, "Failed to delete task.");
        }
      } else {
        return this.RESPONSE(404, {}, 0, "Task not found.");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, 0, "Internal Server Error!");
    }
  }
}

export default new TaskService();
