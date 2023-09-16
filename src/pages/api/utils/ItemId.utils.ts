import { NextApiRequest, NextApiResponse } from "next";
import AppError from "./AppError";

export function getItemIdFromRequest(req: NextApiRequest, res: NextApiResponse): string {
    const itemId = req.query.itemId as string;

    if (!itemId) {
        throw new AppError('ID do item não fornecido', 400);
    }

    return itemId;
}