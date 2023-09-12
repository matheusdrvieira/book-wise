import { ButtonContainer, Button } from "./style";
import { GithubLogo, GoogleLogo, RocketLaunch } from "@phosphor-icons/react";

export function ButtonSignIn() {

    return (
        <ButtonContainer>
            <div>
                <GoogleLogo size={32} color="#8D95AF" weight="fill" />
                <Button>Entrar com Google</Button>
            </div>
            <div>
                <GithubLogo size={24} color="#F8F9FC" weight="duotone" />
                <Button>Entrar com GitHub</Button>
            </div>
            <div>
                <RocketLaunch size={24} color="#8381D9" weight="duotone" />
                <Button>Acessar como visitante</Button>
            </div>
        </ButtonContainer>
    )
}