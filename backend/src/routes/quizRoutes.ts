import { Router } from "express";
import { getQuizById } from "../controllers/quizController";

const router = Router();

router.get("/:id", getQuizById);

export default router;