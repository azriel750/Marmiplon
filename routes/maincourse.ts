<<<<<<< Updated upstream
<<<<<<< Updated upstream

import { Router } from "express";
import { MainCourseController } from "../controllers/MainCourseController";


const MainCourseRouter = Router();

// Browse
MainCourseRouter.get("/MainCourse", (request, response) => {
  const controller = new MainCourseController(request, response);
  controller.browseMainCourse();
});

// Read
MainCourseRouter.get("/MainCourse/:id", (request, response) => {
  const controller = new MainCourseController(request, response);
  controller.readMainCourse();
});

// Edit
MainCourseRouter.put("/MainCourse/:id", (request, response) => {
  const controller = new MainCourseController(request, response);
  controller.editMainCourse();
});

// Add
MainCourseRouter.post("/MainCourse", (request, response) => {
  const controller = new MainCourseController(request, response);
  controller.addMainCourse();
});

// Delete
MainCourseRouter.delete("/MainCourse/:id", (request, response) => {
  const controller = new MainCourseController(request, response);
  controller.deleteMainCourse();
});

export default MainCourseRouter;






=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
