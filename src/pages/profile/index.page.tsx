import { ContainerProfile, Box, Header, Main } from "./style";
import { CardProfile } from "./components/CardProfile";
import { Menu } from "../../components/Menu";
import { CaretLeft, User, } from "@phosphor-icons/react";
import { BookProps, InfoProfileProps, SearchFormData } from "@/interface";
import { Input } from "@/components/Input";
import { InfoProfile } from "./components/InfoProfile";
import { BookWiseClient } from "@/client/BookWiseClient";
import { useEffect, useState } from "react";

export default function Profile() {
    const client = new BookWiseClient();
    const [infoProfile, setInfoProfile] = useState<InfoProfileProps>({} as InfoProfileProps);
    const [booksRatingByUserId, setBooksRatingByUserId] = useState<BookProps[]>([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        if (searchValue === "") handleBooksRatingByUserId({ search: "" })
    }, [searchValue]);

    const handleBooksRatingByUserId = async (data: SearchFormData) => {
        const response = await client.fetchBooksRatingByUserId(data);
        setBooksRatingByUserId(response);
    };

    useEffect(() => {
        async function fetchInfoProfile() {
            const response = await client.fetchInfoProfile()
            setInfoProfile(response);
        }

        fetchInfoProfile();
    }, []);

    const isAnotherUser = true
    return (
        <ContainerProfile>
            <Menu />
            <Box>
                {isAnotherUser ?
                    <Header active={isAnotherUser}>
                        <User size={32} color="#50B2C0" weight="bold" />
                        <h1>Perfil</h1>
                    </Header> :
                    <Header active={isAnotherUser}>
                        <CaretLeft size={20} color="#E6E8F2" weight="bold" />
                        <h2>voltar</h2>
                    </Header>}
                <Main>
                    <section>
                        <Input placeholder="Buscar livro avaliado" onSubmit={handleBooksRatingByUserId} setSearchValue={setSearchValue} />
                        {booksRatingByUserId.map((book: BookProps) => {
                            return (
                                <CardProfile
                                    key={book.id}
                                    data={book} />
                            )
                        })}
                    </section>
                    <section>
                        <InfoProfile data={infoProfile} />
                    </section>
                </Main>
            </Box>
        </ContainerProfile >
    )
}