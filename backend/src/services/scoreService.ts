import { ScoreDao } from "../dao/scoreDao";
import { Score } from "../models/Score";

export class ScoreService {
    private scoreDao = new ScoreDao();

    addScore(score: Score): void {
        this.scoreDao.save(score);
    }

    getUserScores(userId: number): Score[] {
        return this.scoreDao.findByUserId(userId);
    }
}