import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import QuizSelectionPage from "./pages/QuizSelectionPage";
import QuizComponent from "./components/quiz/Quiz";
import HistoryPage from "./pages/HistoryPage";
import ResultPage from "./pages/ResultPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Redirection par défaut vers login */}
                <Route path="/" element={<Navigate to="/login" />} />

                <Route path="/login" element={<LoginPage />} />
                <Route path="/quizzes" element={<QuizSelectionPage />} />
                <Route path="/quiz/:id" element={<QuizComponent />} />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/result" element={<ResultPage />} />
            </Routes>
        </BrowserRouter>
    );
}