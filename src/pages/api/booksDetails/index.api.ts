import { CategoriesProps, RatingProps } from "@/interface";
import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next"
import AppError from "../utils/AppError";
import { getItemIdFromRequest } from "../utils/ItemId.utils";

export default async function handler(req: NextApiRequest, res: NextApiResponse,) {
    if (req.method === 'GET') {
        try {
            const itemId = getItemIdFromRequest(req, res);

            const books = await prisma.book.findFirst({
                where: {
                    id: itemId
                },
                include: {
                    categories: {
                        select: {
                            category: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    },
                    ratings: true,
                },
            });

            if (!books) return

            const newBooks = {
                ...books,
                ratings: calculateAverageRating(books.ratings),
                categories: filteredCategories(books.categories),
                numberOfRatings: books?.ratings.length,
            }

            return res.json(newBooks);
        } catch (error) {
            throw new AppError('Erro ao listar os livros.', 500);
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

function filteredCategories(categories: { category: CategoriesProps }[]) {
    if (categories.length === 0) return;

    const newCategories = categories.map((categorie) => categorie.category.name)

    return newCategories;
}