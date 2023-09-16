import { Rating } from "@/utils/rating";
import { CardContainer, Header, UserInfo } from "./style";
import { BookProps } from "@/interface";

export function CardDescription(props: { data: BookProps }) {

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
            <p>Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget</p>
        </CardContainer>
    )
}