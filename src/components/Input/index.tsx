import { MagnifyingGlass } from "@phosphor-icons/react";
import { InputContainer } from "./style";
import * as zod from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { SearchFormData } from "@/interface";

export const SearchSchema = zod.object({
    search: zod
        .string()
        .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
        .regex(/^[\p{L}\-\s]+$/u, {
            message: 'O usuário pode ter apenas letras e hifens.',
        })
        .transform((search) => search.toLowerCase()),
})

export function Input(props: any) {
    const { register, handleSubmit } = useForm<SearchFormData>({
        resolver: zodResolver(SearchSchema),
        defaultValues: {
            search: ""
        }
    });

    return (
        <InputContainer onSubmit={handleSubmit(props.onSubmit)}>
            <input type="text" placeholder={props.placeholder} {...register('search')} onChange={(e) => props.setSearchValue(e.target.value)} />
            <button type="submit"><MagnifyingGlass size={24} color="#303F73" weight="bold" /></button>
        </InputContainer>
    )
}