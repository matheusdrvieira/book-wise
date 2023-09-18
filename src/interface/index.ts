import { SearchSchema } from "@/components/Input";
import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import * as zod from "zod";

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

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    onSubmit: () => void;
    setSearchValue: any
}

export type SearchFormData = zod.infer<typeof SearchSchema>

// export interface ContextProviderProps {
//     children: ReactNode
// }

// export interface ContextType {
//     setSearchValue: (search: string) => void;
//     searchValue: any
// }