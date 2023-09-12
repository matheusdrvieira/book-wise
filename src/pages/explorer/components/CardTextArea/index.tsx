import { Button, CardContainer, ContainerTextArea, UserInfo } from "./style";
import { Check, Star, X } from "@phosphor-icons/react";
import { useState } from "react";

export function CardTextArea() {
    const [rating, setRating] = useState<number>(0);

    const handleStarClick = (index: any) => {
        setRating(index + 1);
    };

    return (
        <CardContainer>
            <UserInfo>
                <div className="info">
                    <img src="https://github.com/matheusvieira14.png" />
                    <strong>Jaxson Dias</strong>
                </div>
                <div className="toAssess">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleStarClick(index)}
                        >
                            <Star
                                size={22}
                                color="#8381D9"
                                weight={index < rating ? 'fill' : 'bold'}
                            />
                        </button>
                    ))}
                </div>
            </UserInfo>
            <ContainerTextArea>
                <textarea name="assessment" placeholder="Escreva sua avaliação" />
                <div>
                    <Button><X size={24} color="#8381D9" weight="bold" /></Button>
                    <Button><Check size={24} color="#50B2C0" weight="bold" /></Button>
                </div>
            </ContainerTextArea>
        </CardContainer>
    )
}