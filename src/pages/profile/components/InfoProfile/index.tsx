import Image from "next/image";
import { InfoContainer, InfoWrapper } from "./style";
import { BookOpen, BookmarkSimple, Books, UserList } from "@phosphor-icons/react";
import rectangle from "../../../../assets/Rectangle.svg";
import { InfoProfileProps } from "@/interface";

export function InfoProfile(props: { data: InfoProfileProps }) {

    return (
        <InfoContainer>
            <img className="imgProfile" src={props.data.user?.avatar_url} />
            <strong>{props.data.user?.name}</strong>
            <span className="date">{props.data.user?.created_at}</span>
            <Image width={32} height={4} src={rectangle} alt="" />
            <main>
                <InfoWrapper>
                    <BookOpen size={24} color="#50B2C0" weight="bold" />
                    <div>
                        <p>{props.data.totalPages}</p>
                        <span>Páginas lidas</span>
                    </div>
                </InfoWrapper>
                <InfoWrapper>
                    <Books size={24} color="#50B2C0" weight="bold" />
                    <div>
                        <p>{props.data.numberOfBooks}</p>
                        <span>Livros avaliados</span>
                    </div>
                </InfoWrapper>
                <InfoWrapper>
                    <UserList size={24} color="#50B2C0" weight="bold" />
                    <div>
                        <p>{props.data.numberOfAuthors}</p>
                        <span>Autores lidos</span>
                    </div>
                </InfoWrapper>
                <InfoWrapper>
                    <BookmarkSimple size={24} color="#50B2C0" weight="bold" />
                    <div>
                        <p>{props.data.mostReadCategory}</p>
                        <span>Categoria mais lida</span>
                    </div>
                </InfoWrapper>
            </main>
        </InfoContainer>
    )
}