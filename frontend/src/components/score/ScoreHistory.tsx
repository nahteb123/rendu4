import type { Score } from "../../types/Score";

interface Props {
    scores: Score[];
}

export default function ScoreHistory({ scores }: Props) {
    return (
        <ul>
            {scores.map((s, index) => (
                <li key={index}>
                    {s.quizTitle} – {s.value}/{s.total} points
                </li>
            ))}
        </ul>
    );
}