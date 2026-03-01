import { Router, Request, Response } from "express";
import { ScoreService } from "../services/scoreService";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();
const scoreService = new ScoreService();

router.post("/", authMiddleware, (req: Request, res: Response) => {
    scoreService.addScore(req.body);
    res.status(201).json({ message: "Score added" });
});

router.get("/:userId", authMiddleware, (req: Request, res: Response) => {
    const userId = Number(req.params.userId);
    const scores = scoreService.getUserScores(userId);
    res.json(scores);
});

export default router;