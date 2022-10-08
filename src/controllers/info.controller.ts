import InfoService from "../services/info.service";

class InfoController {
  async getInfo() {
    let response = await InfoService.getInfo();
    return response;
  }
  async getOneData(dto: any) {
    let response = await InfoService.getOneData(dto);
    return response;
  }

  async createInfo(dto: any) {
    let response = await InfoService.createInfo(dto);
    return response;
  }

  async updateInfo(dto: any) {
    let response = await InfoService.updateInfo(dto);
    return response;
  }

  async deleteInfo(dto: any) {
    let response = await InfoService.deleteInfo(dto);
    return response;
  }
}

export default new InfoController();
