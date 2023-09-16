import { createContext, useEffect, useState } from "react"
import { BookProps, ContextProviderProps, ContextType } from "../interface"
import { BookWiseClient } from "@/client/BookWiseClient";
import { useRouter } from "next/router";

export const Context = createContext({} as ContextType)

export function ContextProvider({ children }: ContextProviderProps) {
    const router = useRouter();
    const client = new BookWiseClient(router);
    const [booksRatingByUserId, setBooksRatingByUserId] = useState<BookProps[]>([]);


    useEffect(() => {
        async function fetchBookByHighRatings() {
            const response = await client.fetchPopularBooks()
            setBooksRatingByUserId(response);
        }

        fetchBookByHighRatings();
    }, []);

    return (
        <Context.Provider value={{ booksRatingByUserId }}>
            {children}
        </Context.Provider>
    )
}