import express, { Router, Request, Response } from "express";
import InfoController from "../controllers/info.controller";
import AuthService from "../services/auth.service";
const InfoRouter: Router = express.Router();

InfoRouter.get("/get-all-info", async (req: Request, res: Response) => {
  let authenticate = await AuthService.verify(req.headers["authorization"]);
  if (authenticate.status == 200) {
    let response = await InfoController.getInfo();
    res.status(response.status).send(response);
  } else {
    return res.status(authenticate.status).send(authenticate);
  }
});

InfoRouter.get("/get-one-info/:id", async (req: Request, res: Response) => {
  let authenticate = await AuthService.verify(req.headers["authorization"]);
  if (authenticate.status == 200) {
    let response = await InfoController.getOneData(parseInt(req.params.id));
    res.status(response.status).send(response);
  } else {
    return res.status(authenticate.status).send(authenticate);
  }
});

InfoRouter.post("/create-info", async (req: Request, res: Response) => {
  let authenticate = await AuthService.verify(req.headers["authorization"]);
  if (authenticate.status == 200) {
    let response = await InfoController.createInfo(req.body);
    res.status(response.status).send(response);
  } else {
    return res.status(authenticate.status).send(authenticate);
  }
});

InfoRouter.put("/update-info", async (req: Request, res: Response) => {
  let authenticate = await AuthService.verify(req.headers["authorization"]);
  if (authenticate.status == 200) {
    let response = await InfoController.updateInfo(req.body);
    res.status(response.status).send(response);
  } else {
    return res.status(authenticate.status).send(authenticate);
  }
});

InfoRouter.delete(
  "/delete-info-by-id/:id",
  async (req: Request, res: Response) => {
    let authenticate = await AuthService.verify(req.headers["authorization"]);
    if (authenticate.status == 200) {
      let response = await InfoController.deleteInfo(parseInt(req.params.id));
      res.status(response.status).send(response);
    } else {
      return res.status(authenticate.status).send(authenticate);
    }
  }
);

export default InfoRouter;
