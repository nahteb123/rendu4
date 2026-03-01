import { Request, Response, NextFunction } from "express";

export function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(403).json({ message: "Unauthorized" });
    }
    next();
}