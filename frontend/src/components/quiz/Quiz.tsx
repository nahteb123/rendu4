import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type { Quiz } from "../../types/Quiz";
import { getQuiz } from "../../services/quizService";
import { saveScore } from "../../services/scoreService";
import QuestionComponent from "./Question";

export default function QuizComponent() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [quiz, setQuiz] = useState<Quiz | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);

    // Chargement du quiz
    useEffect(() => {
        if (!id) return;

        getQuiz(Number(id))
            .then((data) => setQuiz(data))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <p>Chargement du quiz...</p>;
    }

    if (!quiz || quiz.questions.length === 0) {
        return <p>Quiz indisponible.</p>;
    }

    const currentQuestion = quiz.questions[currentIndex];

    const handleNext = () => {
        let newScore = score;

        if (selectedAnswer === currentQuestion.correctAnswer) {
            newScore += 1;
            setScore(newScore);
        }

        // Dernière question
        if (currentIndex + 1 === quiz.questions.length) {
            // 🔹 Sauvegarde du score (mock)
            saveScore({
                quizTitle: quiz.title,
                value: newScore,
                total: quiz.questions.length,
                date: new Date().toLocaleString(),
            });

            // 🔹 Redirection vers la page résultat
            navigate("/result", {
                state: {
                    title: quiz.title,
                    score: newScore,
                    total: quiz.questions.length,
                },
            });
        } else {
            setCurrentIndex((prev) => prev + 1);
            setSelectedAnswer(null);
        }
    };

    return (
        <div style={styles.container}> {/* Conteneur avec fond gris et texte noir */}
            <h2>{quiz.title}</h2>

            <p>
                Question {currentIndex + 1} / {quiz.questions.length}
            </p>

            <QuestionComponent
                question={currentQuestion}
                selectedAnswer={selectedAnswer}
                onSelectAnswer={setSelectedAnswer}
            />

            <button
                onClick={handleNext}
                disabled={selectedAnswer === null}
            >
                {currentIndex + 1 === quiz.questions.length
                    ? "Terminer le quiz"
                    : "Question suivante"}
            </button>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        padding: "2rem",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
        maxWidth: "800px",
        margin: "0 auto",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        color: "black",
    },
};