


import { Router } from "express";


import { StartersController } from "../controllers/StartersController";
import { Controller } from "../libs/Controller";

 //Initialiastion du bookRouter Express
const StartersRouter = Router();


// Browse
StartersRouter.get("/Starters", (req, res) => {
  const controller = new StartersController(req, res);
  controller.browseStarters();
});

// Read
StartersRouter.get("/Starters/:id", (req, res) => {
  const controller = new StartersController(req, res);
  controller.readStarters();  
});

// Edit
StartersRouter.put("/Starters/:id", (req, res) => {
  const controller = new StartersController(req, res);
  controller.editStarters();
});

// Create (formulaire)
StartersRouter.get("/Starters/create", (req, res) => {
  const controller = new StartersController(req, res);
  controller.createStarters();  // <-- ajoute la route
});

// Add (enregistrement du formulaire)
StartersRouter.post("/Starters", (req, res) => {
  const controller = new StartersController(req, res);
  controller.addStarters();
});

// Delete
StartersRouter.delete("/Starters/:id", (req, res) => {
  const controller = new StartersController(req, res);
  controller.deleteStarters();
});

export default StartersRouter; 


