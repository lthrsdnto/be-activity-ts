import TestService from "../services/test.service";

class TestController {
  async getTest() {
    let response = await TestService.getTest();
    return response;
  }
  async getOneData(dto: any) {
    let response = await TestService.getOneData(dto);
    return response;
  }

  async createTest(dto: any) {
    let response = await TestService.createTest(dto);
    return response;
  }

  async updateTest(dto: any) {
    let response = await TestService.updateTest(dto);
    return response;
  }

  async deleteTest(dto: any) {
    let response = await TestService.deleteTest(dto);
    return response;
  }

  async getTestOr(id: number) {
    let response = await TestService.getTestOr(id);
    return response;
  }

  async getTestAndOp(id: number) {
    let response = await TestService.getTestAndOp(id);
    return response;
  }

  async getTestGreaterThan() {
    let response = await TestService.getTestGreaterThan();
    return response;
  }

  async getTestLessThan() {
    let response = await TestService.getTestLessThan();
    return response;
  }

  async getTestNotOpFindAll(id: number) {
    let response = await TestService.getTestNotOpFindAll(id);
    return response;
  }

  async getTestILikeOpFindAll(name: string) {
    let response = await TestService.getTestILikeOpFindAll(name);
    return response;
  }

  async getTestNotILike(name: string) {
    let response = await TestService.getTestNotILike(name);
    return response;
  }

  async getTestLike(name: string) {
    let response = await TestService.getTestLike(name);
    return response;
  }

  async getTestNotLike(name: string) {
    let response = await TestService.getTestNotLike(name);
    return response;
  }

  async getStartsWith(name: string) {
    let response = await TestService.getStartsWith(name);
    return response;
  }

  async getEndsWith(name: string) {
    let response = await TestService.getEndsWith(name);
    return response;
  }
}

export default new TestController();
