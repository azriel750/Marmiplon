import { Router } from "express";
import { BookController } from "../controllers/RecipesController";

// Initialiastion du bookRouter Express
const bookRouter = Router();

// Browse
bookRouter.get("/recipes", (request, response) => {
  const controller = new RecipesController(request, response);
  controller.browseRecipes();
});

// Read
bookRouter.get("/recipes/:id", (request, response) => {
  const controller = new RecipesController(request, response);
  controller.readRecipe();
});

// Edit
recipeRouter.put("/recipes/:id", (request, response) => {
  const controller = new RecipeController(request, response);
  controller.editRecipe();
});

// Add
bookRouter.post("/recipes/", (request, response) => {
  const controller = new RecipesController(request, response);
  controller.addRecipe();
});

// Delete
recipeRouter.delete("/recipes/:id", (request, response) => {
  const controller = new RecipeController(request, response);
  controller.deleteRecipe();
});

export default recipeRouter;
