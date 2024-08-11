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
                        <TextLink>Pricing</TextLink>
                        <TextLink>Resources</TextLink>
                    </Links>
                </ContainerSeparacao>
                
                <ContainerSeparacao>
                    <Links>
                        <TextLink>Login</TextLink>
                        <Button>Sign Up</Button>
                    </Links>
                </ContainerSeparacao>
            </Nav>
        </>
    );
}

export default Navbar;