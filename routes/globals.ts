import { Router } from "express";
import { GlobalsController } from "../controllers/GlobalsController";

const globalRouter = Router();

globalRouter.get("/", (request, response) => {
  const controller = new GlobalsController(request, response);
  controller.homepage();
});

globalRouter.get("/Categories", (request, response) => {
  const controller = new GlobalsController(request, response);
  controller.categories();
});

globalRouter.get("/Desserts", (request, response) => {
  const controller = new GlobalsController(request, response);
  controller.recettes();
});

export default globalRouter;
