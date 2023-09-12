import Image from "next/image";
import { InfoContainer, InfoWrapper } from "./style";
import { BookOpen, BookmarkSimple, Books, UserList } from "@phosphor-icons/react";
import rectangle from "../../../../assets/Rectangle.svg";

export function InfoProfile() {

    return (
        <InfoContainer>
            <img className="imgProfile" src="https://github.com/matheusvieira14.png" />
            <strong>Brandon Botosh</strong>
            <span className="date">membro desde 2019</span>
            <Image width={32} height={4} src={rectangle} alt="" />

            <InfoWrapper>
                <BookOpen size={24} color="#50B2C0" weight="bold" />
                <div>
                    <p>853</p>
                    <span>Páginas lidas</span>
                </div>
            </InfoWrapper>
            <InfoWrapper>
                <Books size={24} color="#50B2C0" weight="bold" />
                <div>
                    <p>10</p>
                    <span>Livros avaliados</span>
                </div>
            </InfoWrapper>
            <InfoWrapper>
                <UserList size={24} color="#50B2C0" weight="bold" />
                <div>
                    <p>8</p>
                    <span>Autores lidos</span>
                </div>
            </InfoWrapper>
            <InfoWrapper>
                <BookmarkSimple size={24} color="#50B2C0" weight="bold" />
                <div>
                    <p>Computação</p>
                    <span>Categoria mais lida</span>
                </div>
            </InfoWrapper>
        </InfoContainer>
    )
}