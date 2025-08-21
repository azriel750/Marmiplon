import { Request, Response } from "express";
import { MainCourse  } from '../src/data/data';
import { Controller } from "../libs/Controller";

        interface FlashMessage {
        type: 'success' | 'error';
        message: string;
}

export class MainCourseController extends Controller {
    // protected request: Request;
    // protected response: Response;

    // constructor(request: Request, response: Response){
    //     this.request = request;
    //     this.response = response;
    // }

    public browseMainCourse() {
        const success = this.request.query.success;
        let flash: FlashMessage | null= null;

        this.response.render("pages/maindish.ejs", {
            MainCourse,
            flash,
        });
    }
    public readMainCourse(){
        const requestedId = this.request.params.id
        
    }   
}