import express from "express";
import authController from "./controllers/authController";
import scoreController from "./controllers/scoreController";
import quizController from "./controllers/quizController";

const app = express();
app.use(express.json());

app.use("/auth", authController);
app.use("/scores", scoreController);
app.use("/api/quizzes", quizController);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});