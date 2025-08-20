import { Router } from "express";
import recipeRouter from "./Recipes";
import StartersRouter from "./Starters"; 
import globalRouter from "./globals";
import dessertRouter from "./desserts";



>

const router = Router();

router.use(globalRouter);
router.use(dessertRouter);
router.use(recipeRouter);
router.use(startersRouter);
// router.use(mainCourseRouter);

export default router;
