import { Router, Request, Response } from "express";
import { AuthService } from "../services/authServices";

const router = Router();
const authService = new AuthService();

router.post("/login", (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = authService.login(username, password);

    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json(user);
});

export default router;