import { Controller } from "../libs/Controller";
import { recipes, categories, ingredients, recipeIngredients, recipeComments, recipeInstructions,  } from '../src/data/data';


export class StartersController extends Controller {
  public browseStarters() {
    const success = this.request.query.success;
    
    const starters = recipes.filter(recipes => recipes.categoryId === 1);
   
    this.response.render("pages/starters.ejs", {
      starters,
      
    });
  }

  public readStarters() {
    const requestedId = this.request.params.id;
    const starter = recipes.find((recipe) => {
      return recipe.id == parseInt(requestedId) && recipe.categoryId === 1;
    });

    
    

    if (!starter) {
      this.response.send(`La recette demandée n'existe pas`);
      return;
    }

       // Récupérer les commentaires pour cette recette (s'il y en a)
    const comments = recipeComments.filter((comment) => {
      return comment.recipeId == starter.id;
    });

    // Récupérer les ingrédients pour cette recette avec tous les détails
    const starterIngredients = recipeIngredients.filter(ri => ri.recipeId === starter.id);
    const ingredientsWithDetails = starterIngredients.map(ri => {
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
    console.log(starterIngredients)


const stepInstructions = recipeInstructions
  .filter(re => re.recipeId === starter.id)
  .sort((a, b) => a.step - b.step);

  const stepComment = recipeComments
  .filter(rc => rc.recipeId === starter.id)
  .sort((a, b) => a.id - b.id);




    this.response.render("pages/recipe.ejs", {
      recipe: starter,
      starterIngredients,
      ingredientsWithDetails,
      stepInstructions,
      stepComment
      
    });
  }

  public editStarters() {
    this.response.send("Bienvenue sur l'édition d'une recette");
  }

  public createStarters() {
    this.response.render("pages/startersCreate.ejs");
  }

  public addStarters() {
    this.response.send("Bienvenue sur l'ajout d'une recette");
  }

  public deleteStarters() {
    this.response.send("Bienvenue sur la suppression d'une recette");
  }

  public starters() {
    this.response.render("pages/home.ejs");
  }
}
