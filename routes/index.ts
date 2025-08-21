import { Router } from "express";
import globalRouter from "./globals";
import dessertRouter from "./desserts";
import recipeRouter from "./recipes";
import StartersRouter from "./starters";


const router = Router();

router.use(globalRouter);
router.use(dessertRouter);
router.use(recipeRouter);
router.use(StartersRouter);


export default router;
