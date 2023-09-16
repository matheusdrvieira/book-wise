import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next"
import { getUserIdFromRequest } from "../utils/User.utils";
import AppError from "../utils/AppError";

export default async function handler(req: NextApiRequest, res: NextApiResponse,) {
    if (req.method === 'GET') {
        try {
            const userId = getUserIdFromRequest(req, res);
            const search = req.query.search as string;

            const books = await prisma.book.findMany({
                where: {
                    AND: [
                        {
                            ratings: {
                                some: {
                                    user_id: userId,
                                    rate: {
                                        gt: 0,
                                    }
                                }
                            }
                        },
                        {
                            name: {
                                contains: search
                            }
                        }
                    ]
                },
                include: {
                    ratings: {
                        select: {
                            rate: true
                        },
                    },
                },
            });

            const newBooks = books.map(book => ({
                ...book,
                ratings: book.ratings[0].rate
            }));

            return res.json(newBooks);

        } catch (error) {
            throw new AppError('Erro ao buscar os livros.', 500);
        }
    } else {
        throw new AppError('Método não permitido.', 405);
    }
}
