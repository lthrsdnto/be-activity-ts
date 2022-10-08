import TaskService from "../services/task.service";

class TaskController {
  async getTask() {
    let response = await TaskService.getTask();
    return response;
  }
  async getOneData(dto: any) {
    let response = await TaskService.getOneData(dto);
    return response;
  }

  async createTask(dto: any) {
    let response = await TaskService.createTask(dto);
    return response;
  }

  async updateTask(dto: any) {
    let response = await TaskService.updateTask(dto);
    return response;
  }

  async deleteTask(dto: any) {
    let response = await TaskService.deleteTask(dto);
    return response;
  }
}

export default new TaskController();
