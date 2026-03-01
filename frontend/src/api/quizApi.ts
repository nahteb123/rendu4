/*import type { Quiz } from "../types/Quiz";

const API_URL = "http://localhost:3000/api/quizzes";

export async function fetchQuiz(id: number): Promise<Quiz> {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Erreur lors du chargement du quiz");
    }

    return response.json();
}
*/

import type { Quiz } from "../types/Quiz";

// Données mockées (prototype)
const quizzes: Quiz[] = [
    {
        id: 1,
        title: "Quiz JavaScript",
        questions: [
            {
                id: 1,
                label: "Quelle est la sortie de 2 + '2' ?",
                options: ["4", "22", "NaN"],
                correctAnswer: "22",
            },
            {
                id: 2,
                label: "Quelle méthode convertit une chaîne en nombre ?",
                options: ["parseInt()", "toString()", "join()"],
                correctAnswer: "parseInt()",
            },
        ],
    },
    {
        id: 2,
        title: "Quiz TypeScript",
        questions: [
            {
                id: 1,
                label: "TypeScript est un sur-ensemble de quel langage ?",
                options: ["Java", "JavaScript", "Python"],
                correctAnswer: "JavaScript",
            },
            {
                id: 2,
                label: "Quel mot-clé permet de définir une interface ?",
                options: ["class", "type", "interface"],
                correctAnswer: "interface",
            },
        ],
    },
    {
        id: 3,
        title: "Quiz Architecture Logicielle",
        questions: [
            {
                id: 1,
                label: "Quel pattern sépare la vue de la logique métier ?",
                options: ["MVC", "Singleton", "Factory"],
                correctAnswer: "MVC",
            },
            {
                id: 2,
                label: "Quel est l’objectif principal d’une architecture en couches ?",
                options: [
                    "Améliorer les performances",
                    "Séparer les responsabilités",
                    "Réduire le code",
                ],
                correctAnswer: "Séparer les responsabilités",
            },
        ],
    },
];

// 🔹 Récupérer UN quiz par ID
export async function fetchQuizById(id: number): Promise<Quiz | undefined> {
    return quizzes.find((quiz) => quiz.id === id);
}

// 🔹 Récupérer la LISTE des quiz (pour la sélection)
export async function fetchQuizzes(): Promise<{ id: number; title: string }[]> {
    return quizzes.map(({ id, title }) => ({ id, title }));
}