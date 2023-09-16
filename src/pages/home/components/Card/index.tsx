import { CardContainer, Header, UserInfo, Main, Box } from "./style";
import Image from "next/image";
import { BookProps } from "@/interface";
import { Rating } from "@/utils/rating";

export function Card(props: { data: BookProps }) {

    const stars = Rating(props.data.ratings);
    return (
        <CardContainer>
            <Header>
                <UserInfo>
                    <img src="https://github.com/matheusvieira14.png" />
                    <div>
                        <strong>Jaxson Dias</strong>
                        <span>Hoje</span>
                    </div>
                </UserInfo>
                <div className="rating">{stars}</div>
            </Header>
            <Main>
                <img src={`http://localhost:3000/${props.data.cover_url}`} alt="" />
                <Box>
                    <div>
                        <strong>{props.data.name}</strong>
                        <span className="author">{props.data.author}</span>
                    </div>
                    <p>{props.data.summary}</p>
                </Box>
            </Main>
        </CardContainer>
    )
}