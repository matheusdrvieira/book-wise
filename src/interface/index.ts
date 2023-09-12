import { ButtonHTMLAttributes } from "react";

export interface BookProps {
    id: number;
    name: string
    author: string;
    rating: number;
    image_url: any;
    description: string;
    lastRead: boolean;
    created_at: string;
    updated_at: string;
    isRead: boolean;
}

export interface CardExplorerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    data: BookProps;
}