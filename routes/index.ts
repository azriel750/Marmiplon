import { Router } from "express";
import globalRouter from "./globals";
import dessertRouter from "./desserts";
import { categories } from "../src/data/categories/categories";


const router = Router();

router.use(globalRouter);
router.use(dessertRouter);


export default router;
