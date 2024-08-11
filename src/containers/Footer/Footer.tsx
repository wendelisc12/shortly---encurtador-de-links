import TextLink from "../../components/TextLink/TextLink";
import { ColumLink, FooterStyle, LinksContainer, LogoImg, SocialContainer } from "./style";

const Footer = () => {
    return ( 
        <FooterStyle>
            <div>
                <LogoImg src="./logo.svg"/>
            </div>
            <LinksContainer>
                <ColumLink>
                    <TextLink light>Features</TextLink>
                    <br />
                    <TextLink>Link Shortening</TextLink>
                    <TextLink>Branded Links</TextLink>
                    <TextLink>Analytics</TextLink>
                </ColumLink>
                <ColumLink>
                    <TextLink light>Resources</TextLink>
                    <br />
                    <TextLink>Blog</TextLink>
                    <TextLink>Developers</TextLink>
                    <TextLink>Support</TextLink>
                </ColumLink>
                <ColumLink>
                    <TextLink light>Company</TextLink>
                    <br />
                    <TextLink>About</TextLink>
                    <TextLink>Our Team</TextLink>
                    <TextLink>Careers</TextLink>
                    <TextLink>Contact</TextLink>
                </ColumLink>
            </LinksContainer>

            <SocialContainer>
                <a href="#"><img src="./icon-facebook.svg" alt="" /></a>
                <a href="#"><img src="./icon-twitter.svg" alt="" /></a>
                <a href="#"><img src="./icon-pinterest.svg" alt="" /></a>
                <a href="#"><img src="./icon-instagram.svg" alt="" /></a>
            </SocialContainer>
        </FooterStyle>
     );
}
 
export default Footer;