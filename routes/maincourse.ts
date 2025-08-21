
import { Router } from "express";
import { MainCourseController } from "../controllers/MainCourseController";



const MaincourseRouter = Router();


MaincourseRouter.get("/Maincourse", (req, res) => {
  const controller = new MainCourseController(req, res);
  controller.browseMainCourse();
});


MaincourseRouter.get("/Maincourse/:id", (req, res) => {
  const controller = new MainCourseController(req, res);
  controller.readMainCourse();  
});




export default MaincourseRouter; 