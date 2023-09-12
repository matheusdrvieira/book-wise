import { Binoculars, ChartLineUp, SignIn, SignOut, User } from "@phosphor-icons/react";
import { ButtonMenu, MainMenu, BaseButton } from "./style";
import Image from "next/image";
import logo from "../../assets/LogoType.svg"
import { useRouter } from "next/router";

export function Menu() {
    const router = useRouter();

    const isAuthenticated = true
    const isRouteActive = (route: string) => router.pathname === route;
    return (
        <MainMenu>
            <div className="infoMenu">
                <Image src={logo} alt="logo" />
                <ButtonMenu active={isRouteActive('/home')} ><ChartLineUp size={24} weight="bold" />Início</ButtonMenu>
                <ButtonMenu active={isRouteActive('/explorer')}><Binoculars size={24} weight="bold" />Explorar</ButtonMenu>
                {isAuthenticated ?
                    <ButtonMenu active={isRouteActive('/profile')}><User size={24} weight="bold" />Perfil</ButtonMenu> : null}
            </div>
            {isAuthenticated ?
                <BaseButton>
                    <img src="https://github.com/matheusvieira14.png" />
                    Cristofer
                    <button><SignOut size={24} color="#F75A68" weight="bold" /></button>
                </BaseButton>
                :
                <BaseButton>
                    Fazer login
                    <button><SignIn size={24} color="#50B2C0" weight="bold" /></button>
                </BaseButton>}
        </MainMenu>
    )
}