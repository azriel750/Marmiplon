import { Controller } from "../libs/Controller";
import { Dessert, Desserts,Dessertscomment,DessertsComment } from "../src/data/data";


export class DessertsController extends Controller {
  public browseDesserts() {
    const success = this.request.query.success;
   

    this.response.render("pages/Desserts.ejs", {
      Dessert,
    
    });
  }

  public readDesserts() {
    const requestedId = this.request.params.id;
    const Desserts = Dessert.find((Desserts) => {
      return Desserts.id == parseInt(requestedId);
    });

    if (!Desserts) {
      this.response.send("La recette demandée n'existe pas");
      return;
    }

    const comments = Dessertscomment.filter((Dessertscomment) => {
      return Dessertscomment.DessertsId == Desserts.id;

    });

    this.response.render("pages/Dessert.ejs", {
      Desserts,
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
