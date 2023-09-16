import { ContainerHome, Section, Header, Box, Main } from "./style";
import { CaretRight, ChartLineUp, } from "@phosphor-icons/react";
import { Card } from "./components/Card";
import { CardVarient } from "./components/CardVarient";
import { Menu } from "../../components/Menu";
import { useContext, useEffect, useState } from "react";
import { BookProps } from "@/interface";
import { CardLastRead } from "./components/CardLastRead";
import { BookWiseClient } from "../../client/BookWiseClient"
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Context } from "@/context";

export default function Home() {
    const [firstBook, setFirstBook] = useState<BookProps | null>({} as BookProps);
    const [books, setBooks] = useState<BookProps[]>([]);
    const { booksRatingByUserId } = useContext(Context)
    const session = useSession();
    const router = useRouter();
    const client = new BookWiseClient(router);

    useEffect(() => {
        async function fetchRecentlyReviewedBook() {
            const response = await client.fetchRecentlyReviewedBook()
            setBooks(response);
        }

        fetchRecentlyReviewedBook();
    }, []);

    useEffect(() => {
        async function firstBook() {
            const newFirstBook = books.length > 0 ? books[0] : null;
            setFirstBook(newFirstBook);
        }

        firstBook();
    }, [books]);

    return (
        <ContainerHome>
            <Menu />
            <Box>
                <Header>
                    <ChartLineUp size={24} color="#50B2C0" weight="bold" />
                    <h2>Início</h2>
                </Header>
                <Main>
                    <Section>
                        {session.status === "authenticated" && (
                            <div className="cardWrapper">
                                <div className="info">
                                    <p>Sua última leitura</p>
                                    <b onClick={() => router.push("/profile")}>Ver todos <CaretRight size={16} weight="bold" /></b>
                                </div>
                                {firstBook &&
                                    <CardLastRead
                                        key={firstBook.id}
                                        data={firstBook} />}
                            </div>
                        )}
                        <div className="cardWrapper">
                            <p>Avaliações mais recentes</p>
                            {books.map(book => {
                                return (
                                    <Card
                                        key={book.id}
                                        data={book} />
                                )
                            })}
                        </div>
                    </Section>
                    <Section>
                        <div className="info">
                            <p>Livros populares</p>
                            <b onClick={() => router.push("/explorer")}>Ver todos <CaretRight size={16} weight="bold" /></b>
                        </div>
                        {booksRatingByUserId.map((book: BookProps) => {
                            return (
                                <CardVarient
                                    key={book.id}
                                    data={book} />
                            )
                        })}
                    </Section>
                </Main>
            </Box>
        </ContainerHome >
    )
}