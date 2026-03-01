import { useNavigate } from "react-router-dom";

type QuizItem = {
    id: number;
    title: string;
};

const quizzes: QuizItem[] = [
    { id: 1, title: "Quiz de culture générale" },
    { id: 2, title: "Quiz informatique" },
    { id: 3, title: "Quiz logique" },
];

export default function QuizSelectionPage() {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <h2 style={styles.h2}>Sélectionnez un quiz</h2> {/* Appliquer le style h2 ici */}

            <ul style={styles.list}>
                {quizzes.map((quiz) => (
                    <li key={quiz.id}>
                        <button
                            style={styles.button}
                            onClick={() => navigate(`/quiz/${quiz.id}`)}
                        >
                            {quiz.title}
                        </button>
                    </li>
                ))}
            </ul>

            {/* 🔹 Bouton historique */}
            <hr />

            <button
                style={{ ...styles.button, backgroundColor: "#000000" }}
                onClick={() => navigate("/history")}
            >
                📊 Voir l’historique des scores
            </button>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        padding: "2rem",
        maxWidth: "500px",
        margin: "0 auto",
        backgroundColor: "#D9D9D9",
    },
    list: {
        listStyle: "none",
        padding: 0,
    },
    button: {
        width: "100%",
        padding: "1rem",
        marginBottom: "1rem",
        fontSize: "1rem",
        cursor: "pointer",
    },
    h2: {
        color: "black",
    },
};