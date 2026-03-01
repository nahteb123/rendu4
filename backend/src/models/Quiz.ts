export interface Question {
    id: number;
    label: string;
    options: string[];
    correctAnswer: string;
}

export interface Quiz {
    id: number;
    title: string;
    questions: Question[];
}