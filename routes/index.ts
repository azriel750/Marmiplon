import { Router } from "express";
import globalRouter from "./globals";
import dessertRouter from "./desserts";
import recipeRouter from "./recipes";
import StartersRouter from "./starters";
import MainCoursesRouter from "./maincourse";


const router = Router();

router.use(globalRouter);
router.use(dessertRouter);
router.use(recipeRouter);
router.use(StartersRouter);
router.use(MainCoursesRouter);


export default router;
