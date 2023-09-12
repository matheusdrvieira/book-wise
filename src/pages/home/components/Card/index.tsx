import { Star } from "@phosphor-icons/react";
import { CardContainer, Header, UserInfo, Main, P1, P2, Box } from "./style";
import Image from "next/image";
import { BookProps } from "@/interface";
import { Rating } from "@/utils/rating";

export function Card(props: { data: BookProps, lastread: boolean }) {

    const stars = Rating(props.data.rating);
    return (
        <CardContainer>
            {!props.lastread ?
                <Header>
                    <UserInfo>
                        <img src="https://github.com/matheusvieira14.png" />
                        <div>
                            <strong>Jaxson Dias</strong>
                            <span>Hoje</span>
                        </div>
                    </UserInfo>
                    <div className="rating">{stars}</div>
                </Header> : null}
            <Main>
                <Image src={props.data.image_url} alt="" />
                <Box>
                    <div >
                        {props.lastread ?
                            <span className="date">Há 2 dias</span> : null}
                        <strong>{props.data.name}</strong>
                        <span className="author">{props.data.author}</span>
                        {!props.lastread ?
                            <P1>{props.data.description}</P1> :
                            <P2>{props.data.description}</P2>}
                    </div>

                    {props.lastread ?
                        <div className="rating">{stars}</div> : null}
                </Box>
            </Main>
        </CardContainer>
    )
}