import { Controller } from "../libs/Controller";
import { recipes, categories, ingredients, starters, startersComments  } from '../src/data/data';


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
    const starter = starters.find((starter) => {
      return starter.id == parseInt(requestedId);
    });

    if (!starter) {
      this.response.send(`La recette demandée n'existe pas`);
      return;
    }

    const comments = startersComments.filter((starterComment) => {
      return starterComment.starterId == starter.id;
    });

    this.response.render("pages/starters.ejs", {
      starter,
      comments,
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
