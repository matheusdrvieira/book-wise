import { CardContainer, Main, Checked } from "./style";
import Image from "next/image";
import { Rating } from "@/utils/rating";
import React from "react";
import { CardExplorerProps } from "@/interface";

export const CardExplorer = React.forwardRef((props: CardExplorerProps, ref: any) => {

    const stars = Rating(props.data.rating);
    return (
        <CardContainer ref={ref} {...props} >
            <Image src={props.data.image_url} alt="imagem do livro" />
            <Checked active={props.data.isRead}>LIDO</Checked>
            <Main>
                <div className="infoBook">
                    <strong>{props.data.name}</strong>
                    <span>{props.data.author}</span>
                </div>
                <div className="rating">{stars}</div>
            </Main>
        </CardContainer >
    )
})