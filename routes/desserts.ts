
import { Router } from "express";
import { DessertsController } from "../controllers/DessertsController";

const dessertRouter = Router();

// Browse
dessertRouter.get("/Desserts", (request, response) => {
  const controller = new DessertsController(request, response);
  controller.browseDesserts();
});

// Read
dessertRouter.get("/Desserts/:id", (request, response) => {
  const controller = new DessertsController(request, response);
  controller.readDessert();
});

// Edit
dessertRouter.put("/Desserts/:id", (request, response) => {
  const controller = new DessertsController(request, response);
  controller.editDessert();
});

// Add
dessertRouter.post("/Desserts", (request, response) => {
  const controller = new DessertsController(request, response);
  controller.addDessert();
});

// Delete
dessertRouter.delete("/Desserts/:id", (request, response) => {
  const controller = new DessertsController(request, response);
  controller.deleteDessert();
});

export default dessertRouter;
