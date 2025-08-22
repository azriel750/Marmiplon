import { Router } from "express";
import { MainCourseController } from "../controllers/MainCourseController";


const MainCoursesRouter = Router();

MainCoursesRouter.get("/MainCourses", (req, res) => {
  const controller = new MainCourseController(req, res);
  controller.browseMainCourses();
});

MainCoursesRouter.get("/MainCourses/:id", (req, res) => {
  const controller = new MainCourseController(req, res);
  controller.readMainCourses();  
});


export default MainCoursesRouter;
