import { Binoculars, ChartLineUp, SignIn, SignOut, User } from "@phosphor-icons/react";
import { ButtonMenu, MainMenu, BaseButton } from "./style";
import Image from "next/image";
import logo from "../../assets/LogoType.svg"
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { ModalAuthenticated } from "@/pages/explorer/components/ModalAuthenticated";
import * as Dialog from "@radix-ui/react-dialog"
import { useEffect, useState } from "react";
import { UserProps } from "@/interface";
import { BookWiseClient } from "@/client/BookWiseClient";

export function Menu() {
    const [user, setUser] = useState<UserProps>({} as UserProps);
    const client = new BookWiseClient();
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        async function fetchInfoProfile() {
            const response = await client.fetchUserById()
            setUser(response);
        }

        fetchInfoProfile();
    }, []);

    const isRouteActive = (route: string) => router.pathname === route;
    return (
        <MainMenu>
            <div className="infoMenu">
                <Image src={logo} alt="logo" />
                <ButtonMenu active={isRouteActive('/home')} onClick={() => router.push("/home")}><ChartLineUp size={24} weight="bold" />Início</ButtonMenu>
                <ButtonMenu active={isRouteActive('/explorer')} onClick={() => router.push("/explorer")}><Binoculars size={24} weight="bold" />Explorar</ButtonMenu>
                {session.status === "authenticated" ?
                    <ButtonMenu active={isRouteActive('/profile')} onClick={() => router.push("/profile")}><User size={24} weight="bold" />Perfil</ButtonMenu> : null}
            </div>
            {session.status === "authenticated" ?
                <BaseButton>
                    <img src={user.avatar_url} />
                    <span>{user.name}</span>
                    <button><SignOut size={24} color="#F75A68" weight="bold" /></button>
                </BaseButton>
                :
                <BaseButton>
                    Fazer login
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <button><SignIn size={24} color="#50B2C0" weight="bold" /></button>
                        </Dialog.Trigger>
                        <ModalAuthenticated />
                    </Dialog.Root>
                </BaseButton>}
        </MainMenu>
    )
}