import { ContainerSignIn, Login } from "./style";
import img from "../../assets/Image.svg";
import Image from "next/image";
import { ButtonSignIn } from "../../components/ButtonSignIn";


export default function SignIn() {

    return (
        <ContainerSignIn>
            <Image src={img} alt="" />
            <Login>
                <div>
                    <h1>Boas vindas!</h1>
                    <p>Faça seu login ou acesse como visitante.</p>
                </div>
                <ButtonSignIn />
            </Login>
        </ContainerSignIn>
    )
}