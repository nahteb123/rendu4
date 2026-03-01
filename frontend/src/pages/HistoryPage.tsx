import { getScores } from "../services/scoreService.ts";

export default function HistoryPage() {
    const scores = getScores();

    return (
        <>
            <h2>Historique des scores</h2>

            {scores.length === 0 && <p>Aucun quiz réalisé.</p>}

            <ul>
                {scores.map((score, index) => (
                    <li key={index}>
                        <strong>{score.quizTitle}</strong> –{" "}
                        {score.value}/{score.total} (
                        {score.date})
                    </li>
                ))}
            </ul>
        </>
    );
}