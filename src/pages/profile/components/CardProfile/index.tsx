import { CardContainer, Main, Box, Section } from "./style";
import Image from "next/image";
import { BookProps } from "@/interface";
import { Rating } from "@/utils/rating";

export function CardProfile(props: { data: BookProps }) {

    const stars = Rating(props.data.ratings);
    return (
        <CardContainer>
            <span>{props.data.created_at}</span>
            <Main>
                <Section>
                    <img src={props.data.cover_url} alt="" />
                    <Box>
                        <div className="info">
                            <strong>{props.data.name}</strong>
                            <span>{props.data.author}</span>
                        </div>
                        <div className="rating">{stars}</div>
                    </Box>
                </Section>
                <p>{props.data.summary}</p>
            </Main>
        </CardContainer>
    )
}