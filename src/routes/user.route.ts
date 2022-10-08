import express, { Router, Request, Response } from "express";
import UserController from "../controllers/user.controller";
import AuthService from "../services/auth.service";
const UserRouter: Router = express.Router();

UserRouter.get("/get-all-user", async (req: Request, res: Response) => {
  let authenticate = await AuthService.verify(req.headers["authorization"]);
  if (authenticate.status == 200) {
    let response = await UserController.getUser();
    res.status(response.status).send(response);
  } else {
    return res.status(authenticate.status).send(authenticate);
  }
});

UserRouter.get("/get-one-user/:id", async (req: Request, res: Response) => {
  let authenticate = await AuthService.verify(req.headers["authorization"]);
  if (authenticate.status == 200) {
    let response = await UserController.getOneData(parseInt(req.params.id));
    res.status(response.status).send(response);
  } else {
    return res.status(authenticate.status).send(authenticate);
  }
});

UserRouter.post("/create-user", async (req: Request, res: Response) => {
  let authenticate = await AuthService.verify(req.headers["authorization"]);
  if (authenticate.status == 200) {
    let response = await UserController.createUser(req.body);
    res.status(response.status).send(response);
  } else {
    return res.status(authenticate.status).send(authenticate);
  }
});

UserRouter.put("/update-user", async (req: Request, res: Response) => {
  let authenticate = await AuthService.verify(req.headers["authorization"]);
  if (authenticate.status == 200) {
    let response = await UserController.updateUser(req.body);
    res.status(response.status).send(response);
  } else {
    return res.status(authenticate.status).send(authenticate);
  }
});

UserRouter.delete(
  "/delete-user-by-id/:id",
  async (req: Request, res: Response) => {
    let authenticate = await AuthService.verify(req.headers["authorization"]);
    if (authenticate.status == 200) {
      let response = await UserController.deleteUser(parseInt(req.params.id));
      res.status(response.status).send(response);
    } else {
      return res.status(authenticate.status).send(authenticate);
    }
  }
);

export default UserRouter;
