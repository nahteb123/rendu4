import type { Question } from "../../types/Question";

interface Props {
    question: Question;
    selectedAnswer: string | null;
    onSelectAnswer: (answer: string) => void;
}

export default function QuestionComponent({
                                              question,
                                              selectedAnswer,
                                              onSelectAnswer,
                                          }: Props) {
    return (
        <div>
            <h3>{question.label}</h3>

            <ul>
                {question.options.map((option) => (
                    <li key={option}>
                        <button
                            onClick={() => onSelectAnswer(option)}
                            style={{
                                fontWeight:
                                    selectedAnswer === option
                                        ? "bold"
                                        : "normal",
                            }}
                        >
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}