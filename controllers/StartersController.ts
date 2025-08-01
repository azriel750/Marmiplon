import { Controller } from "../libs/Controller";
import { Request, Response } from "express";


export class StartersController extends Controller {
  public browseStarters() {
    const success = this.request.query.success;
    let flash = null;
 
 


   
    

   
  public readDessert() {
    // Je récupère l'ID du dessert réclamé (dans l'URL)
    const requestedId = this.request.params.id;

    // J'exploite l'ID réclamé pour récupérer le dessert dans "la base de données"
    const starters = starters.find((starters) => {
      return starters.id == parseInt(requestedId);
    });

    // Si je n'ai pas trouvé le dessert
    if (!starters) {
      this.response.send(`La recette demandée n'existe pas`);
    }

    // Puisque j'ai trouvé le dessert, j'utilise son ID pour identifier les commentaires correspondants au dessert
    const comments = startersComments.filter((dessertComment) => {
      return dessertComment.dessertId == starters?.id;
    });

    // Si j'ai trouvé la recette
    this.response.render("pages/starters.ejs", {
      starters,
      comments,
    });
  }

  public editStarters() {
    this.response.send("Bienvenue sur l'éditon d'une recette");
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


 starters() {
    this.response.render("pages/home.ejs");
    
  }
}
}