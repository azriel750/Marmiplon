import { Request, Response } from "express";

// WTF : rien à faire la, juste utile pour l'explication


export class RecipeControllerController {
  protected request: Request;
  protected response: Response;

  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }

  public browseRecipes() {
    // Faire des traitements (base de données, calculs, etc)

    // Faire la réponse
    this.response.send(JSON.stringify(recipes));
  }

  public readRecipe() {
    // Je récupère l'ID du livre réclamé (dans l'URL)
    const requestedId = this.request.params.id;

    // J'exploite l'ID réclamé pour récupérer le livre dans "la base de données"
    const recipe = recipes.find((recipe) => {
      return recipe.id == parseInt(requestedId);
    });

    // Si je n'ai pas trouvé le livre
    if (!recipe) {
      this.response.send(`Le livre demandé n'existe pas`);
    }

    // Puisque j'ai trouvé le livre, j'utilise son ID pour identifier les commentaires correspondants au livre
    const relatedComments = recipeComments.filter((recipeComment) => {
      return recipeComment.recipeId == recipe?.id;
    });

    // Si j'ai trouvé le livre
    this.response.send(
      `Bienvenue sur le détail de la recette : ${recipe?.title}. Il y a ${relatedComments.length} commentaire(s)`
    );
  }

  public editrecipe() {
    this.response.send("Bienvenue sur l'éditon de la recette");
  }

  public addrecipe() {
    this.response.send("Bienvenue sur l'ajout d'un livre");
  }

  public deleteRecipe() {
    this.response.send("Bienvenue sur la suppression d'une recette");
  }
}
