import { CardContainer, Main } from "./style";
import Image from "next/image";
import { BookProps } from "@/interface";
import { Rating } from "@/utils/rating";

export function CardVarient(props: { data: BookProps }) {

    const stars = Rating(props.data.rating);
    return (
        <CardContainer>
            <Image src={props.data.image_url} alt="" />
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