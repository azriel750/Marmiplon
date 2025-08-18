import { Router } from "express";
import globalRouter from "./globals";
import dessertRouter from "./desserts";
import recipeRouter from "./recipes";
// import startersRouter from "./starters"; // à décommenter quand prêt
// import mainCourseRouter from "./maincourses"; // idem

const router = Router();

router.use(globalRouter);
router.use(dessertRouter);
router.use(recipeRouter);
// router.use(startersRouter);
// router.use(mainCourseRouter);

export default router;
