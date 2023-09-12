import { ContainerHome, Section, Header, Box, Main } from "./style";
import { CaretRight, ChartLineUp, } from "@phosphor-icons/react";
import { Card } from "./components/Card";
import { CardVarient } from "./components/CardVarient";
import { Menu } from "../../components/Menu";
import { BOOK_API } from "../../service/static.api";
import { useEffect, useState } from "react";
import { BookProps } from "@/interface";

export default function Home() {
    const [lastRead, setlastRead] = useState<BookProps | null>(null);
    const [bookList, setBookList] = useState<BookProps[]>([]);

    useEffect(() => {
        function fetchBook() {
            setBookList(BOOK_API);
            const bookLastRead = getLastRead(BOOK_API);
            if (bookLastRead) {
                setlastRead(bookLastRead);
            }
        };

        fetchBook();
    }, []);

    function getLastRead(list: BookProps[]) {
        return list.find((book) => book.lastRead) || null;
    }

    const isAuthenticated = true
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
                        {isAuthenticated && lastRead && (
                            <>
                                <div className="info">
                                    <p>Sua última leitura</p>
                                    <b>Ver todos <CaretRight size={16} weight="bold" /></b>
                                </div>
                                <Card
                                    key={lastRead.id}
                                    data={lastRead}
                                    lastread={true}
                                />
                            </>
                        )}
                        <p>Avaliações mais recentes</p>
                        {BOOK_API.map((book: any) => {
                            return (
                                <Card
                                    key={book.id}
                                    data={book}
                                    lastread={false} />
                            )
                        })}
                    </Section>
                    <Section>
                        <div className="info">
                            <p>Livros populares</p>
                            <b>Ver todos <CaretRight size={16} weight="bold" /></b>
                        </div>
                        {BOOK_API.map((book: BookProps) => {
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