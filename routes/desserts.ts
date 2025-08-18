
import { Router } from "express";
import { DessertsController } from "../controllers/DessertsController";

const dessertRouter = Router();

// Browse
dessertRouter.get("/desserts", (request, response) => {
  const controller = new DessertsController(request, response);
  controller.browseDesserts();
});

// Read
dessertRouter.get("/desserts/:id", (request, response) => {
  const controller = new DessertsController(request, response);
  controller.readDessert();
});

// Edit
dessertRouter.put("/desserts/:id", (request, response) => {
  const controller = new DessertsController(request, response);
  controller.editDessert();
});

// Add
dessertRouter.post("/desserts", (request, response) => {
  const controller = new DessertsController(request, response);
  controller.addDessert();
});

// Delete
dessertRouter.delete("/desserts/:id", (request, response) => {
  const controller = new DessertsController(request, response);
  controller.deleteDessert();
});

export default dessertRouter;
