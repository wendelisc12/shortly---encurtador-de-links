import Button from "../../components/Button/Button";
import TextLink from "../../components/TextLink/TextLink";
import { Nav, Links,ContainerSeparacao } from "./style";

const Navbar = () => {
    return (
        <>
            <Nav>
                <ContainerSeparacao>
                    <img src="./logo.svg" alt="" />
                    <Links>
                        <TextLink>Features</TextLink>
                        <TextLink>Preços</TextLink>
                        <TextLink>Recursos</TextLink>
                    </Links>
                </ContainerSeparacao>
                
                <ContainerSeparacao>
                    <Links>
                        <TextLink>Login</TextLink>
                        <Button>Registrar</Button>
                    </Links>
                </ContainerSeparacao>
            </Nav>
        </>
    );
}

export default Navbar;