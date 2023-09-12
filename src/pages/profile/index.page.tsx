import { ContainerProfile, Box, Header, Main } from "./style";
import { CardProfile } from "./components/CardProfile";
import { Menu } from "../../components/Menu";
import { CaretLeft, User, } from "@phosphor-icons/react";
import { BOOK_API } from "../../service/static.api";
import { BookProps } from "@/interface";
import { Input } from "@/components/Input";
import { InfoProfile } from "./components/InfoProfile";

export default function Profile() {

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
                        <Input />
                        {BOOK_API.map((book: BookProps) => {
                            return (
                                <CardProfile
                                    data={book}
                                />
                            )
                        })}
                    </section>
                    <section>
                        <InfoProfile />
                    </section>
                </Main>
            </Box>
        </ContainerProfile >
    )
}