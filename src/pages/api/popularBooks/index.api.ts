import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import AppError from "../utils/AppError";
import { RatingProps } from "@/interface";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const limit = Number(req.query.limit);
            const search = String(req.query.search || '').toLowerCase();

            const books = await prisma.book.findMany({
                where: {
                    ratings: {
                        some: {
                            rate: {
                                gt: 0,
                            },
                        },
                    },
                    OR: [
                        {
                            name: {
                                contains: search,
                            },
                        },
                        {
                            author: {
                                contains: search,
                            },
                        },
                        {
                            categories: {
                                some: {
                                    category: {
                                        name: {
                                            contains: search,
                                        },
                                    },
                                },
                            },
                        },
                    ],
                },
                include: {
                    ratings: true,
                },
                take: limit,
            });

            const newBooks = books.map(book => ({
                ...book,
                ratings: calculateAverageRating(book.ratings),
            }));

            newBooks.sort((a, b) => (b.ratings || 0) - (a.ratings || 0));

            return res.json(newBooks);
        } catch (error) {
            throw new AppError('Erro ao buscar os livros.', 500);
        }
    } else {
        throw new AppError('Método não permitido.', 405);
    }
}

function calculateAverageRating(ratings: RatingProps[]) {
    if (ratings.length === 0) return null;

    const totalRating = ratings.reduce((sum, rating) => sum + rating.rate, 0);

    return totalRating / ratings.length;
}
