import express, { Router, Request, Response } from "express";
import testController from "../controllers/test.controller";
const TestRouter: Router = express.Router();

TestRouter.get("/test-data", async (req: Request, res: Response) => {
  let response = await testController.getTest();
  res.status(response.status).send(response);
});

TestRouter.get("/test-getone-data/:id", async (req: Request, res: Response) => {
  let response = await testController.getOneData(parseInt(req.params.id));
  res.status(response.status).send(response);
});

TestRouter.post("/test-create-data", async (req: Request, res: Response) => {
  let response = await testController.createTest(req.body);
  res.status(response.status).send(response);
});

TestRouter.put("/test-update-data", async (req: Request, res: Response) => {
  let response = await testController.updateTest(req.body);
  res.status(response.status).send(response);
});

TestRouter.delete(
  "/test-delete-data/:id",
  async (req: Request, res: Response) => {
    let response = await testController.deleteTest(parseInt(req.params.id));
    res.status(response.status).send(response);
  }
);

export default TestRouter;
