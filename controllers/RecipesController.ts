import { Request, Response } from "express";
import { recipes, categories, ingredients, recipeComments } from '../src/data/data';

export class RecipeController {
  protected request: Request;
  protected response: Response;

  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }

  public browseRecipes() {
    // Faire des traitements (base de données, calculs, etc)
    this.response.send(JSON.stringify(recipes));
  }

  public readRecipe() {
    // Je récupère l'ID de la recette réclamée (dans l'URL)
    const requestedId = this.request.params.id;

    // J'exploite l'ID réclamé pour récupérer la recette dans "la base de données"
    const recipe = recipes.find((recipe) => {
      return recipe.id == parseInt(requestedId);
    });

    // Si je n'ai pas trouvé la recette
    if (!recipe) {
      this.response.send(`La recette demandée n'existe pas`);
      return;
    }

    // Puisque j'ai trouvé la recette, j'utilise son ID pour identifier les commentaires correspondants à la recette
    const relatedComments = recipeComments.filter((recipeComment) => {
      return recipeComment.recipeId == recipe.id;
    });

    // Réponse avec infos sur la recette et le nombre de commentaires
    this.response.send(
      `Bienvenue sur le détail de la recette : ${recipe.title}. Il y a ${relatedComments.length} commentaire(s)`
    );
  }

  public editRecipe() {
    this.response.send("Bienvenue sur l'édition de la recette");
  }

  public addRecipe() {
    this.response.send("Bienvenue sur l'ajout d'une recette");
  }

  public deleteRecipe() {
    this.response.send("Bienvenue sur la suppression d'une recette");
  }
}
