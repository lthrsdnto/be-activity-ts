import UserService from "../services/user.service";

class UserController {
  async getUser() {
    let response = await UserService.getUser();
    return response;
  }
  async getOneData(dto: any) {
    let response = await UserService.getOneData(dto);
    return response;
  }

  async createUser(dto: any) {
    let response = await UserService.createUser(dto);
    return response;
  }

  async updateUser(dto: any) {
    let response = await UserService.updateUser(dto);
    return response;
  }

  async deleteUser(dto: any) {
    let response = await UserService.deleteUser(dto);
    return response;
  }
}

export default new UserController();
