import { scores } from "../database/database";
import { Score } from "../models/Score";

export class ScoreDao {
    save(score: Score): void {
        scores.push(score);
    }

    findByUserId(userId: number): Score[] {
        return scores.filter(s => s.userId === userId);
    }
}