import { NextApiRequest, NextApiResponse } from "next";
import AppError from "./AppError";

export function getUserIdFromRequest(req: NextApiRequest, res: NextApiResponse): string {
    const userId = req.query.userId as string;

    if (!userId) {
        throw new AppError('ID do usuário não fornecido', 400);
    }

    return userId;
}