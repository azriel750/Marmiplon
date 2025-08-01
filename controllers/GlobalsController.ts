import { Request, Response } from "express";

export class GlobalsController {
  protected request: Request;
  protected response: Response;

  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }

  public homepage() {
    this.response.render("pages/home");
    
  }

  public categories() {
    this.response.send("Bienvenue sur la page catégorie");
  }

  public recettes() {
    this.response.send("Bienvenue sur la page recettes");
  }
}
