import { fetchQuizById, fetchQuizzes } from "../api/quizApi";
import type { Quiz } from "../types/Quiz";

export async function getQuiz(id: number): Promise<Quiz | null> {
    const quiz = await fetchQuizById(id);
    return quiz ?? null;
}

export async function getQuizList() {
    return fetchQuizzes();
}