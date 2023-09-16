import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getUserIdFromRequest } from "../utils/User.utils";
import AppError from "../utils/AppError";

interface Book {
    id: string;
    total_pages: number;
    categories: {
        category: {
            name: string;
        };
    }[];
    ratings: {
        rate: number;
        user: {
            name: string;
            created_at: Date;
            avatar_url: string | null;
        };
    }[];
}

interface CategoryCount {
    [categoryName: string]: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const userId = getUserIdFromRequest(req, res);

            const books = await prisma.book.findMany({
                where: {
                    ratings: {
                        some: {
                            user_id: userId,
                            rate: {
                                gt: 0,
                            },
                        },
                    },
                },
                include: {
                    categories: {
                        select: {
                            category: {
                                select: {
                                    name: true,
                                },
                            },
                        },
                    },
                    ratings: {
                        select: {
                            rate: true,
                            user: {
                                select: {
                                    avatar_url: true,
                                    name: true,
                                    created_at: true,
                                },
                            },
                        },
                    },
                },
            });

            const totalPages = books.reduce((total, book) => total + book.total_pages, 0);
            const mostReadCategory = calculateMostReadCategory(books);

            return res.json({
                user: books[0]?.ratings[0]?.user,
                mostReadCategory,
                totalPages,
                numberOfBooks: books.length,
                numberOfAuthors: books.length,
            });
        } catch (error) {
            throw new AppError('Erro ao buscar as informações.', 500);
        }
    } else {
        throw new AppError('Método não permitido.', 405);
    }
}

function calculateMostReadCategory(books: Book[]): string {
    const categoryCounts: CategoryCount = {};

    books.forEach((book) => {
        book.categories.forEach((category) => {
            const categoryName = category.category.name;
            categoryCounts[categoryName] = (categoryCounts[categoryName] || 0) + 1;
        });
    });

    return Object.keys(categoryCounts).reduce((a, b) => (categoryCounts[a] > categoryCounts[b] ? a : b), "");
}