import { CardContainer, Main } from "./style";
import Image from "next/image";
import { BookProps } from "@/interface";
import { Rating } from "@/utils/rating";

export function CardVarient(props: { data: BookProps }) {

    const stars = Rating(props.data.ratings);
    return (
        <CardContainer>
            <img src={`http://localhost:3000/${props.data.cover_url}`} alt="Imagem do Livro" />
            <Main>
                <div className="infoBook">
                    <strong>{props.data.name}</strong>
                    <span>{props.data.author}</span>
                </div>
                <div className="rating">{stars}</div>
            </Main>
        </CardContainer>
    )
}