import { MagnifyingGlass } from "@phosphor-icons/react";
import { InputContainer } from "./style";

export function Input() {

    return (
        <InputContainer>
            <input type="text" placeholder="Buscar livro avaliado" />
            <MagnifyingGlass size={24} color="#303F73" weight="bold" />
        </InputContainer>
    )
}