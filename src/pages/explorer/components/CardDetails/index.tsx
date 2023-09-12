import { CardContainer, Main, Section, Footer } from "./style";
import Image from "next/image";
import { BookProps } from "@/interface";
import { Rating } from "@/utils/rating";
import { BookOpen, BookmarkSimple } from "@phosphor-icons/react";

export function CardDetails(props: { data: BookProps }) {

    const stars = Rating(props.data.rating);
    return (
        <CardContainer>
            <Main>
                <Image src={props.data.image_url} alt="imagem do livro" />
                <Section>
                    <div className="infoBook">
                        <strong>{props.data.name}</strong>
                        <span>{props.data.author}</span>
                    </div>
                    <div className="assessment">
                        <div className="rating">{stars}</div>
                        <span>3 avaliações</span>
                    </div>
                </Section>
            </Main>
            <Footer>
                <div className="boxFooter">
                    <BookmarkSimple size={24} color="#50B2C0" weight="bold" />
                    <div>
                        <p>Páginas</p>
                        <strong>Computação, educação</strong>
                    </div>
                </div>
                <div className="boxFooter">
                    <BookOpen size={24} color="#50B2C0" weight="bold" />
                    <div>
                        <p>Categoria</p>
                        <strong>160</strong>
                    </div>
                </div>
            </Footer>
        </CardContainer>
    )
}