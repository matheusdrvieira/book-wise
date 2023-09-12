import * as Dialog from "@radix-ui/react-dialog"
import { Button, ButtonClose, Content, Overlay } from "./style"
import { GithubLogo, GoogleLogo, X } from "@phosphor-icons/react"

export function ModalAuthenticated() {

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <ButtonClose>
                    <X size={24} color="#8D95AF" weight="bold" />
                </ButtonClose>
                <header>
                    <h1>Faça login para deixar sua avaliação</h1>
                </header>
                <div>
                    <GoogleLogo size={32} color="#8D95AF" weight="fill" />
                    <Button>Entrar com Google</Button>
                </div>
                <div>
                    <GithubLogo size={24} color="#F8F9FC" weight="duotone" />
                    <Button>Entrar com GitHub</Button>
                </div>
            </Content>
        </Dialog.Portal >
    )
}