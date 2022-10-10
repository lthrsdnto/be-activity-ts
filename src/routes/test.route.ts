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

TestRouter.get("/get-test-or-data/:id", async (req: Request, res: Response) => {
  let response = await testController.getTestOr(parseInt(req.params.id));
  res.status(response.status).send(response);
});

TestRouter.get(
  "/get-test-and-data/:id",
  async (req: Request, res: Response) => {
    let response = await testController.getTestAndOp(parseInt(req.params.id));
    res.status(response.status).send(response);
  }
);

TestRouter.get(
  "/get-test-greater-than-data",
  async (req: Request, res: Response) => {
    let response = await testController.getTestGreaterThan();
    res.status(response.status).send(response);
  }
);

TestRouter.get(
  "/get-test-less-than-data",
  async (req: Request, res: Response) => {
    let response = await testController.getTestLessThan();
    res.status(response.status).send(response);
  }
);

TestRouter.get(
  "/get-test-data-not-equal/:id",
  async (req: Request, res: Response) => {
    let response = await testController.getTestNotOpFindAll(
      parseInt(req.params.id)
    );
    res.status(response.status).send(response);
  }
);

TestRouter.get(
  "/get-test-data-ilike/:name",
  async (req: Request, res: Response) => {
    let response = await testController.getTestILikeOpFindAll(req.params.name);
    res.status(response.status).send(response);
  }
);

TestRouter.get(
  "/get-test-data-not-ilike/:name",
  async (req: Request, res: Response) => {
    let response = await testController.getTestNotILike(req.params.name);
    res.status(response.status).send(response);
  }
);

TestRouter.get("/get-test-like/:name", async (req: Request, res: Response) => {
  let response = await testController.getTestLike(req.params.name);
  res.status(response.status).send(response);
});

TestRouter.get(
  "/get-test-not-like/:name",
  async (req: Request, res: Response) => {
    let response = await testController.getTestNotLike(req.params.name);
    res.status(response.status).send(response);
  }
);

TestRouter.get(
  "/get-test-starts-with/:name",
  async (req: Request, res: Response) => {
    let response = await testController.getStartsWith(req.params.name);
    res.status(response.status).send(response);
  }
);

TestRouter.get(
  "/get-test-ends-with/:name",
  async (req: Request, res: Response) => {
    let response = await testController.getEndsWith(req.params.name);
    res.status(response.status).send(response);
  }
);

export default TestRouter;
