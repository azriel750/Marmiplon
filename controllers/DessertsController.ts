import { Controller } from "../libs/Controller";
import { recipes, categories,} from "../src/data/data";


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
    const dessert = recipes.find((dessert) => {
      return dessert.id == parseInt(requestedId);
    });

    if (!dessert) {
      this.response.send("La recette demandée n'existe pas");
      return;
    }

    const comments = dessertsComments.filter((dessertsComment) => {
      return dessertsComment.dessertId == dessert.id;

    });

    this.response.render("pages/Dessert.ejs", {
      dessert,
      comments,
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
}
