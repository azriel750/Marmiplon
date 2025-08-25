import {recipes, categories, ingredients, recipeIngredients, recipeComments, recipeInstructions,} from '../src/data/data';
import { Controller } from "../libs/Controller";


export class DessertsController extends Controller {
  public browseDesserts() {
    const success = this.request.query.success;
    const desserts = recipes.filter(recipes => recipes.categoryId === 3);

    this.response.render("pages/Desserts.ejs", {
      desserts,
    });
  }

  public readDesserts() {
    const requestedId = this.request.params.id;
    const desserts = recipes.find((recipe) => {
      return recipe.id == parseInt(requestedId) && recipe.categoryId === 3  ;
    });

    if (!desserts) {
      this.response.send("La recette demandée n'existe pas");
      return;
    }

    const comments = recipeComments.filter((comment) => {
          return comment.recipeId == desserts.id;
    });

    const dessertsIngredients = recipeIngredients.filter(ri => ri.recipeId === desserts.id);
    const ingredientsWithDetails = dessertsIngredients.map(ri => {
    const ingredient = ingredients.find(i => i.id === ri.ingredientId);
    return {
        id: ri.id,
        quantity: ri.quantity,
        unit: ri.unit,
        ingredientId: ri.ingredientId,
        recipeId: ri.recipeId,
        name: ingredient?.name || 'Ingrédient inconnu'
      };
    });
    console.log(dessertsIngredients)

const stepInstructions = recipeInstructions
  .filter(re => re.recipeId === desserts.id)
  .sort((a, b) => a.step - b.step);

  const stepComment = recipeComments
  .filter(rc => rc.recipeId === desserts.id)
  .sort((a, b) => a.id - b.id);


    this.response.render("pages/recipe.ejs", {
      recipe: desserts,
      dessertsIngredients,
      ingredientsWithDetails,
      stepInstructions,
      stepComment
      
    });
  }

  public editDesserts() {
    this.response.send("Bienvenue sur l'édition d'une recette");
  }

  public createDesserts() {
    this.response.render("pages/dessertCreate.ejs");
  }

  public addDesserts() {
    this.response.send("Bienvenue sur l'ajout d'une recette");
  }

  public deleteDesserts() {
    this.response.send("Bienvenue sur la suppression d'une recette");
  }

  public desserts() {
  this.response.render("pages/home.ejs");
  }
}
