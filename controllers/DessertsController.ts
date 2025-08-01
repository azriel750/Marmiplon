import { Controller } from "../libs/Controller";
import { recipes } from "../src/data/recipes/recipe";
import { recipeComments } from "../src/data/recipes/recipeComments";
import { Dessert } from "../src/interfaces/Categories";
import { RecipeComment } from "../src/interfaces/RecipeComments";

export class DessertsController extends Controller {
  public browseDesserts() {
    const success = this.request.query.success;
    let flash = null;

    if (success === "true") {
      flash = {
        type: "success",
        message: "Le dessert a bien été créé!",
      };
    } else if (success === "false") {
      flash = {
        type: "error",
        message: "Une erreur est survenue lors de la création du dessert.",
      };
    }

    this.response.render("pages/desserts.ejs", {
      recipes,
      flash,
    });
  }

  public readDessert() {
    const requestedId = this.request.params.id;
    const dessert = recipes.find((recipeId) => {
      return recipeId.id == parseInt(requestedId);
    });

    if (!dessert) {
      this.response.send(`La recette demandée n'existe pas`);
      return;
    }

    const comments = recipeComments.filter((recipeComments) => {
      return recipeComments.recipeId == dessert.id;
    });

    this.response.render("pages/dessert.ejs", {
      dessert,
      comments,
    });
  }

  public editDessert() {
    this.response.send("Bienvenue sur l'éditon d'unz recette");
  }

  public createDessert() {
    this.response.render("pages/dessertCreate.ejs");
  }

  public addDessert() {
    this.response.send("Bienvenue sur l'ajout d'une recette");
  }

  public deleteDessert() {
    this.response.send("Bienvenue sur la suppression d'une recette");
  }
}
