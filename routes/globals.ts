import { Router } from "express";
import { GlobalsController } from "../controllers/GlobalsController";

// Initialiastion du bookRouter Express
const globalRouter = Router();

// Déclaration de la route 'homepage'
globalRouter.get("/", (request, response) => {
  const controller = new GlobalsController(request, response);
  controller.homepage();
});

// Déclaration de la route 'contact'
globalRouter.get("/Category", (request, response) => {
  const controller = new GlobalsController(request, response);
  controller.contact();
});

// Déclaration de la route 'à propos'
globalRouter.get("/Recipes", (request, response) => {
  const controller = new GlobalsController(request, response);
  controller.about();
});

export default globalRouter;
