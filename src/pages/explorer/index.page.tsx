import { Menu } from "@/components/Menu";
import { ContainerExplorer, Main, Header } from "./style";
import { Categories } from "./components/Categories";
import { Binoculars } from "@phosphor-icons/react";
import { Input } from "@/components/Input";
import { CardExplorer } from "./components/CardExplorer";
import { BOOK_API } from "@/service/static.api";
import { BookProps } from "@/interface";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog"
import { ModalDetails } from "./components/ModalDetails";

export default function Explorer() {
    const [booksDetails, setBooksDetails] = useState<BookProps>({} as BookProps);

    const getBookDetails = (id: number) => {
        const book = BOOK_API.find((book: BookProps) => book.id === id)

        if (book) setBooksDetails(book)
    }

    return (
        <ContainerExplorer>
            <Menu />
            <Main>
                <Header>
                    <div>
                        <Binoculars size={32} color="#50B2C0" weight="bold" />
                        <h1>Explorar</h1>
                    </div>
                    <Input />
                </Header>
                <Categories />
                <section>
                    {BOOK_API.map((book: BookProps) => {
                        return (
                            <Dialog.Root key={book.id}>
                                <Dialog.Trigger asChild>
                                    <CardExplorer
                                        data={book}
                                        onClick={() => getBookDetails(book.id)} />
                                </Dialog.Trigger>
                                <ModalDetails
                                    key={booksDetails.id}
                                    data={booksDetails} />
                            </Dialog.Root>
                        )
                    })}
                </section>
            </Main>
        </ContainerExplorer>
    )
}