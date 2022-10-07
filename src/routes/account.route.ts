import express, { Router, Request, Response } from "express";
import AccountController from "../controllers/account.controller";
const AccountRouter: Router = express.Router();

AccountRouter.get("/user-login", async (req: Request, res: Response) => {
  let response = await AccountController.login(req.body);
  res.status(response.status).send(response);
});

AccountRouter.post("/user-signup", async (req: Request, res: Response) => {
  let response = await AccountController.signup(req.body);
  res.status(response.status).send(response);
});

export default AccountRouter;
