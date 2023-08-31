import { Star } from "@phosphor-icons/react";
import { CardContainer, Main } from "./style";
import Image from "next/image";
import book from "../../assets/arquitetura-limpa.png"

export function CardVarient() {

    return (
        <CardContainer>
            <Image src={book} alt="" />
            <Main>
                <div className="infoBook">
                    <strong>O Hobbit</strong>
                    <span>J.R.R. Tolkien</span>
                </div>
                <div className="rating">
                    <Star size={16} color="#8381D9" weight="bold" />
                    <Star size={16} color="#8381D9" weight="bold" />
                    <Star size={16} color="#8381D9" weight="bold" />
                    <Star size={16} color="#8381D9" weight="bold" />
                    <Star size={16} color="#8381D9" weight="bold" />
                </div>
            </Main>
        </CardContainer>
    )
}