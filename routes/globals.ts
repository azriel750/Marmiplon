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
  controller.recettes(); // correction : appel à la bonne méthode
});

export default globalRouter;
