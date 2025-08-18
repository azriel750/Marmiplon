
import { Router } from "express";
import { StartersController } from "../controllers/StartersController";

const startersRouter = Router();

// Browse
startersRouter.get("/starters", (request, response) => {
  const controller = new StartersController(request, response);
  controller.browseStarters();
});

// Read
startersRouter.get("/starters/:id", (request, response) => {
  const controller = new StartersController(request, response);
  controller.readStarter();
});

// Edit
startersRouter.put("/starters/:id", (request, response) => {
  const controller = new StartersController(request, response);
  controller.editStarters();
});

// Add
startersRouter.post("/starters", (request, response) => {
  const controller = new StartersController(request, response);
  controller.addStarters();
});

// Delete
startersRouter.delete("/starters/:id", (request, response) => {
  const controller = new StartersController(request, response);
  controller.deleteStarters();
});

export default startersRouter;

