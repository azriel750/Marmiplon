import { Controller } from "../libs/Controller";
import { categories } from "../src/data/categories/categories";
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

    this.response.render("pages/.ejs", {
      desserts,
      flash,
    });
  }

  public readDessert() {
    // Je récupère l'ID du dessert réclamé (dans l'URL)
    const requestedId = this.request.params.id;

    // J'exploite l'ID réclamé pour récupérer le dessert dans "la base de données"
    const dessert = desserts.find((dessert) => {
      return dessert.id == parseInt(requestedId);
    });

    // Si je n'ai pas trouvé le dessert
    if (!dessert) {
      this.response.send(`La recette demandée n'existe pas`);
    }

    // Puisque j'ai trouvé le dessert, j'utilise son ID pour identifier les commentaires correspondants au dessert
    const comments = dessertComments.filter((dessertComment) => {
      return dessertComment.dessertId == dessert?.id;
    });

    // Si j'ai trouvé la recette
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
