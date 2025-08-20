import { Router } from "express";
import recipeRouter from "./Recipes";
import StartersRouter from "./Starters"; 
import globalRouter from "./globals";
import dessertRouter from "./desserts";
// import mainCourseRouter from "./maincourses"; // idem

const router = Router();

router.use(globalRouter);
router.use(dessertRouter);
router.use(recipeRouter);
router.use(StartersRouter);
// router.use(mainCourseRouter);

export default router;
