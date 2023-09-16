import { ButtonContainer, Button } from "./style";
import { GithubLogo, GoogleLogo, RocketLaunch } from "@phosphor-icons/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export function ButtonSignIn() {
    const session = useSession();
    const router = useRouter();

    if (session.status === "authenticated") router.push("/home")

    return (
        <ButtonContainer>
            <div>
                <GoogleLogo size={32} color="#8D95AF" weight="fill" />
                <Button onClick={() => signIn("google")}>Entrar com Google</Button>
            </div>
            <div>
                <GithubLogo size={24} color="#F8F9FC" weight="duotone" />
                <Button>Entrar com GitHub</Button>
            </div>
            <div>
                <RocketLaunch size={24} color="#8381D9" weight="duotone" />
                <Button onClick={() => router.push("/home")}>Acessar como visitante</Button>
            </div>
        </ButtonContainer>
    )
}