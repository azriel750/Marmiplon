import { Router } from "express";
import { RecipeController } from "../controllers/RecipesController";

const recipeRouter = Router();

// Browse
recipeRouter.get("/recipes", (request, response) => {
  const controller = new RecipeController(request, response);
  controller.browseRecipes();
});

// Read
recipeRouter.get("/recipes/:id", (request, response) => {
  const controller = new RecipeController(request, response);
  controller.readRecipe();
});

// Edit
recipeRouter.put("/recipes/:id", (request, response) => {
  const controller = new RecipeController(request, response);
  controller.editRecipe();
});

// Add
recipeRouter.post("/recipes", (request, response) => {
  const controller = new RecipeController(request, response);
  controller.addRecipe();
});

// Delete
recipeRouter.delete("/recipes/:id", (request, response) => {
  const controller = new RecipeController(request, response);
  controller.deleteRecipe();
});

export default recipeRouter;
