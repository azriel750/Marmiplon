import { Controller } from "../libs/Controller";
import { recipes, categories, ingredients, starters, startersComments  } from '../src/data/data';

interface FlashMessage {
  type: 'success' | 'error';
  message: string;
}

export class StartersController extends Controller {
  public browseStarters() {
    const success = this.request.query.success;
    let flash: FlashMessage | null = null;

    if (success === "true") {
      flash = {
        type: "success",
        message: "L'entrée a bien été créée!",
      };
    } else if (success === "false") {
      flash = {
        type: "error",
        message: "Une erreur est survenue lors de la création de l'entrée.",
      };
    }

    this.response.render("pages/starters.ejs", {
      starters,
      flash,
    });
  }

  public readStarter() {
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

    this.response.render("pages/starter.ejs", {
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
