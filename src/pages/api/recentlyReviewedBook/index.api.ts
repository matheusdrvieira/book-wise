import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import AppError from "../utils/AppError";
import { getUserIdFromRequest } from "../utils/User.utils";

export default async function recentlyRatedBooks(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const userId = getUserIdFromRequest(req, res);

            const books = await prisma.book.findMany({
                where: {
                    ratings: {
                        some: {
                            user_id: userId,
                        },
                    },
                },
                include: {
                    ratings: {
                        where: {
                            user_id: userId,
                        },
                        orderBy: {
                            created_at: 'desc',
                        },
                        select: {
                            rate: true,
                        },
                    },
                },
            });

            const newBooks = books.map((book) => ({
                ...book,
                ratings: book.ratings[0]?.rate || null,
            }));

            return res.json(newBooks);
        } catch (error) {
            throw new AppError('Erro ao buscar os livros recentemente avaliados.', 500);
        }
    } else {
        throw new AppError('Método não permitido.', 405);
    }
}