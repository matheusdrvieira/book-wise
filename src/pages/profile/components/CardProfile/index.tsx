import { CardContainer, Main, Box, Section } from "./style";
import Image from "next/image";
import { BookProps } from "@/interface";
import { Rating } from "@/utils/rating";

export function CardProfile(props: { data: BookProps }) {

    const stars = Rating(props.data.rating);
    return (
        <CardContainer>
            <span>{props.data.updated_at}</span>
            <Main>
                <Section>
                    <Image src={props.data.image_url} alt="" />
                    <Box>
                        <div className="info">
                            <strong>{props.data.name}</strong>
                            <span>{props.data.author}</span>
                        </div>
                        <div className="rating">{stars}</div>
                    </Box>
                </Section>
                <p>{props.data.description}</p>
            </Main>
        </CardContainer>
    )
}