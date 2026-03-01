import type { Score } from "../types/Score";

const STORAGE_KEY = "skillquiz_scores";

export function saveScore(score: Score): void {
    const scores = getScores();
    scores.push(score);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
}

export function getScores(): Score[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}