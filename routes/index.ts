import { Router } from "express";
import globalRouter from "./globals";
import recipeRouter from "./recipes";

// Initialiastion du router Express
const router = Router();

// On lie le router "globals" au router principale
router.use(globalRouter);

// On lie le router spécial "book" au router principale
router.use(recipeRouter);

export default router;
