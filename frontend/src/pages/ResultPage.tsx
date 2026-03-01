import { useLocation, useNavigate } from "react-router-dom";

interface ResultState {
    title: string;
    score: number;
    total: number;
}

export default function ResultPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as ResultState | undefined;

    if (!state) {
        return <p>Aucun résultat à afficher.</p>;
    }

    return (
        <div style={styles.container}> {/* Conteneur avec fond gris et texte noir */}
            <h2>{state.title}</h2>
            <h3>Résultat du quiz</h3>

            <p>
                Score obtenu : {state.score} / {state.total}
            </p>

            <button onClick={() => navigate("/quizzes")}>
                Retour à l’accueil
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