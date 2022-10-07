import express, { Router, Request, Response } from "express";
import TaskController from "../controllers/task.controller";
import AuthService from "../services/auth.service";
const TaskRouter: Router = express.Router();

TaskRouter.get("/get-all-task", async (req: Request, res: Response) => {
  let authenticate = await AuthService.verify(req.headers["authorization"]);
  if (authenticate.status == 200) {
    let response = await TaskController.getTask();
    res.status(response.status).send(response);
  } else {
    return res.status(authenticate.status).send(authenticate);
  }
});
TaskRouter.get("/get-one-task/:id", async (req: Request, res: Response) => {
  let authenticate = await AuthService.verify(req.headers["authorization"]);
  if (authenticate.status == 200) {
    let response = await TaskController.getOneData(parseInt(req.params.id));
    res.status(response.status).send(response);
  } else {
    return res.status(authenticate.status).send(authenticate);
  }
});

TaskRouter.post("/create-task", async (req: Request, res: Response) => {
  let authenticate = await AuthService.verify(req.headers["authorization"]);
  if (authenticate.status == 200) {
    let response = await TaskController.createTask(req.body);
    res.status(response.status).send(response);
  } else {
    return res.status(authenticate.status).send(authenticate);
  }
});

TaskRouter.put("/update-task", async (req: Request, res: Response) => {
  let authenticate = await AuthService.verify(req.headers["authorization"]);
  if (authenticate.status == 200) {
    let response = await TaskController.updateTask(req.body);
    res.status(response.status).send(response);
  } else {
    return res.status(authenticate.status).send(authenticate);
  }
});

TaskRouter.delete(
  "/delete-task-by-id/:id",
  async (req: Request, res: Response) => {
    let authenticate = await AuthService.verify(req.headers["authorization"]);
    if (authenticate.status == 200) {
      let response = await TaskController.deleteTask(parseInt(req.params.id));
      res.status(response.status).send(response);
    } else {
      return res.status(authenticate.status).send(authenticate);
    }
  }
);

export default TaskRouter;
