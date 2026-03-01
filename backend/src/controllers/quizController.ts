import { Router } from "express";
import { QuizService } from "../services/quizService";

const router = Router();

// 🔹 Liste des quiz
router.get("/", (_req, res) => {
    res.json(QuizService.getAllQuizzes());
});

// 🔹 Quiz par ID
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const quiz = QuizService.getQuizById(id);

    if (!quiz) {
        return res.status(404).json({ message: "Quiz introuvable" });
    }

    res.json(quiz);
});

export default router;