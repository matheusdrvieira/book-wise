import { ContainerHome, MainMenu, ButtonMenu, Main } from "./style";
import logo from "../../assets/LogoType.svg"
import Image from "next/image";
import { Binoculars, CaretRight, ChartLineUp, SignIn, User } from "@phosphor-icons/react";
import { Card } from "../../components/Card";
import { CardVarient } from "../../components/CardVarient";

export default function Home() {

    const isAuthenticated = true
    return (
        <ContainerHome>
            <MainMenu>
                <div className="infoMenu">
                    <Image src={logo} alt="logo" />
                    <ButtonMenu><ChartLineUp size={24} weight="bold" />Início</ButtonMenu>
                    <ButtonMenu><Binoculars size={24} weight="bold" />Explorar</ButtonMenu>
                    {isAuthenticated ?
                        <ButtonMenu><User size={24} weight="bold" />Perfil</ButtonMenu> : null}
                </div>
                {isAuthenticated ?
                    <div className="signUp">
                        <img src="https://github.com/matheusvieira14.png" />
                        Cristofer
                        <button><SignIn size={24} color="#F75A68" weight="bold" /></button>
                    </div>
                    :
                    <button className="signIn">
                        Fazer login
                        <SignIn size={24} color="#50B2C0" weight="bold" />
                    </button>}
            </MainMenu>
            <Main>
                <div className="title">
                    <ChartLineUp size={24} color="#50B2C0" weight="bold" />
                    <h2>Início</h2>
                </div>
                <section>
                    <div className="box">
                        <p>Avaliações mais recentes</p>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="box">
                        <div className="info">
                            <p>Livros populares</p>
                            <span>Ver todos <CaretRight size={16} weight="bold" /></span>
                        </div>
                        <CardVarient />
                        <CardVarient />
                        <CardVarient />
                    </div>
                </section>
            </Main>
        </ContainerHome >
    )
}