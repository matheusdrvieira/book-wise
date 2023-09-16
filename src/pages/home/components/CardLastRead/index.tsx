import { CardContainer, Main, Box } from "./style";
import { BookProps } from "@/interface";
import { Rating } from "@/utils/rating";

export function CardLastRead(props: { data: BookProps }) {

    const stars = Rating(props.data.ratings);
    return (
        <CardContainer>
            <Main>
                <img src={`http://localhost:3000/${props.data.cover_url}`} alt="" />
                <Box>
                    <div >
                        <span className="date">{props.data.created_at}</span>
                        <strong>{props.data.name}</strong>
                        <span className="author">{props.data.author}</span>
                        <p>{props.data.summary}</p>
                    </div>
                    <div className="rating">{stars}</div>
                </Box>
            </Main>
        </CardContainer>
    )
}