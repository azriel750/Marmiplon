import { Router } from "express";
import { GlobalsController } from "../controllers/GlobalsController";

const globalRouter = Router();

globalRouter.get("/", (request, response) => {
  const controller = new GlobalsController(request, response);
  controller.homepage();
});


globalRouter.get("/categories", (request, response) => {


  const controller = new GlobalsController(request, response);
  controller.categories();
});


globalRouter.get("/desserts", (request, response) => {


  const controller = new GlobalsController(request, response);
  controller.desserts();
});

export default globalRouter;
