import { Star } from "@phosphor-icons/react";
import { CardContainer, Header, UserInfo, Main } from "./style";
import Image from "next/image";
import book from "../../assets/arquitetura-limpa.png"

export function Card() {

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
                <div className="rating">
                    <Star size={16} color="#8381D9" weight="bold" />
                    <Star size={16} color="#8381D9" weight="bold" />
                    <Star size={16} color="#8381D9" weight="bold" />
                    <Star size={16} color="#8381D9" weight="bold" />
                    <Star size={16} color="#8381D9" weight="bold" />
                </div>
            </Header>

            <Main>
                <Image src={book} alt="" />
                <div >
                    <strong>O Hobbit</strong>
                    <span>J.R.R. Tolkien</span>
                    <p>Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibhkk kkkkkkkkkkkkkk zgdgzdg dfhdfs dfhdhdh</p>
                </div>
            </Main>
        </CardContainer>
    )
}