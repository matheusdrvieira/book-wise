import { ButtonHTMLAttributes, ReactNode } from "react";

export interface BookProps {
    id: number;
    name: string
    author: string;
    ratings: number;
    categories: string[];
    numberOfRatings: number;
    cover_url: any;
    summary: string;
    created_at: string;
    total_pages: number;
}

export interface CardExplorerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    data: BookProps;
}

export interface RatingProps {
    id?: string;
    user_id?: string;
    rate: number;
    description: string;
    created_at: Date;
    book_id: string;
}

export interface CategoriesProps {
    id?: string;
    name: string;
}

export interface InfoProfileProps {
    user: UserProps;
    mostReadCategory: string;
    numberOfAuthors: number;
    numberOfBooks: number;
    totalPages: number;
}

export interface UserProps {
    id: string;
    avatar_url: any;
    name: string;
    created_at: string;
}

export interface ContextProviderProps {
    children: ReactNode
}

export interface ContextType {
    booksRatingByUserId: BookProps[]
}