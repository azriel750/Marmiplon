import { Request, Response } from "express";
import {  recipes } from '../src/data/data';
import { Controller } from "../libs/Controller";

export class MainCourseController extends Controller {
    //protected request: Request;
     //protected response: Response;

    // constructor(request: Request, response: Response){
      //   this.request = request;
        // this.response = response;
     

    public browseMainCourses() {
    const success = this.request.query.success;
    const MainCourses = recipes.filter(recipes => recipes.categoryId === 2);

    this.response.render("pages/MainCourses.ejs", {
        MainCourses, 
    });
}

    public readMainCourses(){
        const requestedId = this.request.params.id
        
    }   

    public editMainCourse(){
        const requestedId = this.request.params.id
        
    }   

    public addMainCourse(){
        const requestedId = this.request.params.id
        
    }

    public deleteMainCourse(){
        const requestedId = this.request.params.id
        
    }
}