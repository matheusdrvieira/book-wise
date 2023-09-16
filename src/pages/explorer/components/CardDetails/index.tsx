import { CardContainer, Main, Section, Footer } from "./style";
import { BookProps, CategoriesProps } from "@/interface";
import { Rating } from "@/utils/rating";
import { BookOpen, BookmarkSimple } from "@phosphor-icons/react";

export function CardDetails(props: { data: BookProps }) {
    const categories = props.data.categories.join(' | ');
    const stars = Rating(props.data.ratings);

    return (
        <CardContainer>
            <Main>
                <img src={props.data.cover_url} alt="imagem do livro" />
                <Section>
                    <div className="infoBook">
                        <strong>{props.data.name}</strong>
                        <span>{props.data.author}</span>
                    </div>
                    <div className="assessment">
                        <div className="rating">{stars}</div>
                        <span>{props.data.numberOfRatings} avaliações</span>
                    </div>
                </Section>
            </Main>
            <Footer>
                <div className="boxFooter">
                    <BookmarkSimple size={24} color="#50B2C0" weight="bold" />
                    <div>
                        <p>Categoria</p>
                        <strong>{categories}</strong>
                    </div>
                </div>
                <div className="boxFooter">
                    <BookOpen size={24} color="#50B2C0" weight="bold" />
                    <div>
                        <p>Páginas</p>
                        <strong>{props.data.total_pages}</strong>
                    </div>
                </div>
            </Footer>
        </CardContainer>
    )
}