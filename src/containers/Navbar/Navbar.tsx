import { useState } from "react";
import Button from "../../components/Button/Button";
import TextLink from "../../components/TextLink/TextLink";
import { Nav, Links, ContainerMenu, HamburguerMenu, HorizontalLine } from "./style";

const Navbar = () => {

    const [menuResponsive, setMenuResponsive] = useState(false)

    return (
        <>
            <Nav>
                <img src="./logo.svg" alt="" />
                <ContainerMenu showMenu={menuResponsive}>
                    <Links>
                        <TextLink responsiveSize={20} responsiveLight>Features</TextLink>
                        <TextLink responsiveSize={20} responsiveLight>Pricing</TextLink>
                        <TextLink responsiveSize={20} responsiveLight>Resources</TextLink>
                    </Links>
                    <HorizontalLine></HorizontalLine>
                    <Links>
                        <TextLink responsiveSize={20} responsiveLight>Login</TextLink>
                        <Button responsiveWidth={300} responsiveHeight={50}>Sign Up</Button>
                    </Links>
                </ContainerMenu>
                <HamburguerMenu onClick={()=>setMenuResponsive(!menuResponsive)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </HamburguerMenu>
            </Nav>
        </>
    );
}

export default Navbar;