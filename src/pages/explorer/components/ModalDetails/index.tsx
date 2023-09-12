import { X } from "@phosphor-icons/react";
import { CardDescription } from "../CardDescription";
import { CardDetails } from "../CardDetails";
import { CardTextArea } from "../CardTextArea";
import { ButtonClose, Content, Overlay, Section } from "./style";
import * as Dialog from "@radix-ui/react-dialog"
import { BookProps } from "@/interface";
import { ModalAuthenticated } from "../ModalAuthenticated";

export function ModalDetails(props: { data: BookProps }) {
    if (!props.data) return
    const book = props.data
    const isAuthenticated = true

    return (
        <Dialog.Portal >
            <Overlay />
            <Content>
                <Section>
                    <ButtonClose >
                        <X size={24} color="#8D95AF" weight="bold" />
                    </ButtonClose>
                    <CardDetails
                        key={book.id}
                        data={book} />
                </Section>
                <Section>
                    <div className="infoAssessment">
                        <p>Avaliações</p>
                        {book.isRead && !isAuthenticated ?
                            <Dialog.Root>
                                <Dialog.Trigger asChild>
                                    <button >Avaliar</button>
                                </Dialog.Trigger>
                                <ModalAuthenticated />
                            </Dialog.Root>
                            : null}
                    </div>
                    {book.rating >= 1 && book.isRead ?
                        < CardDescription
                            key={book.id}
                            data={book} /> : null}

                    {book.isRead && book.rating <= 1 ? <CardTextArea /> : null}
                </Section>
            </Content >
        </Dialog.Portal >
    )
}