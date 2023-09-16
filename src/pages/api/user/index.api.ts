import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next"
import { getUserIdFromRequest } from "../utils/User.utils";
import AppError from "../utils/AppError";

export default async function handler(req: NextApiRequest, res: NextApiResponse,) {
    if (req.method === 'GET') {
        try {
            const userId = getUserIdFromRequest(req, res);

            const user = await prisma.user.findUnique({
                where: {
                    id: userId,
                },
            });

            return res.json(user);

        } catch (error) {
            throw new AppError('Erro ao buscar usuário.', 500);
        }
    } else {
        throw new AppError('Método não permitido.', 405);
    }
}