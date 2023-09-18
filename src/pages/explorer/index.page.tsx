import { Menu } from "@/components/Menu";
import { ContainerExplorer, Main, Header } from "./style";
import { Categories } from "./components/Categories";
import { Binoculars } from "@phosphor-icons/react";
import { Input } from "@/components/Input";
import { CardExplorer } from "./components/CardExplorer";
import { BookProps, SearchFormData } from "@/interface";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog"
import { ModalDetails } from "./components/ModalDetails";
import { BookWiseClient } from "@/client/BookWiseClient";

export default function Explorer() {
    const [booksDetails, setBooksDetails] = useState<BookProps>({} as BookProps);
    const [popularBooks, setPopularBooks] = useState<BookProps[]>([]);
    const client = new BookWiseClient();
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        if (searchValue === "") fetchPopularBooks({ search: "" })
    }, [searchValue]);

    const fetchPopularBooks = async (data: SearchFormData) => {
        const response = await client.fetchPopularBooks(data);
        setPopularBooks(response);
    };

    async function fetchBookDetails(id: number) {
        const response = await client.fetchBookDetails(id);
        setBooksDetails(response);
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
                    <Input placeholder="Buscar livro ou autor" onSubmit={fetchPopularBooks} setSearchValue={setSearchValue} />
                </Header>
                <Categories />
                <section>
                    {popularBooks.map((book: BookProps) => {
                        return (
                            <Dialog.Root key={book.id}>
                                <Dialog.Trigger asChild>
                                    <CardExplorer
                                        data={book}
                                        onClick={() => fetchBookDetails(book.id)} />
                                </Dialog.Trigger>
                                {booksDetails.id &&
                                    <ModalDetails
                                        key={booksDetails.id}
                                        data={booksDetails} />}
                            </Dialog.Root>
                        )
                    })}
                </section>
            </Main>
        </ContainerExplorer>
    )
}