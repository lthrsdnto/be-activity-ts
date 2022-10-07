import AccountService from "../services/account.service";

class AccountController {

  async login(requestObject:any) {
    let response = await AccountService.login(requestObject);
    return response;
  }

  async signup(requestObject:any) {
    let response = await AccountService.signup(requestObject);
    return response;
  }
}

export default new AccountController;
