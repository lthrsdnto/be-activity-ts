import TestService from "../services/test.service";

class TestController{
    async getTest() {
        let response = await TestService.getTest();
        return response;
    }
    async getOneData(dto:any) {
        let response = await TestService.getOneData(dto);
        return response;
    }

    async createTest(dto:any) {
        let response = await TestService.createTest(dto);
        return response;
    }

    async updateTest(dto:any) {
        let response = await TestService.updateTest(dto);
        return response;
    }

    async deleteTest(dto:any) {
        let response = await TestService.deleteTest(dto);
        return response;
    }
}

export default new TestController;