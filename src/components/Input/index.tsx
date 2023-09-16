import { MagnifyingGlass } from "@phosphor-icons/react";
import { InputContainer } from "./style";

export function Input(props: any) {

    return (
        <InputContainer>
            <input type="text" placeholder={props.placeholder} />
            <MagnifyingGlass size={24} color="#303F73" weight="bold" />
        </InputContainer>
    )
}