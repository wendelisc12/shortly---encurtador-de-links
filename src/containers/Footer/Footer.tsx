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
                    <TextLink  responsiveSize={20} light>Features</TextLink>
                    <br />
                    <TextLink  responsiveSize={20}>Link Shortening</TextLink>
                    <TextLink  responsiveSize={20}>Branded Links</TextLink>
                    <TextLink  responsiveSize={20}>Analytics</TextLink>
                </ColumLink>
                <ColumLink>
                    <TextLink  responsiveSize={20} light>Resources</TextLink>
                    <br />
                    <TextLink  responsiveSize={20}>Blog</TextLink>
                    <TextLink  responsiveSize={20}>Developers</TextLink>
                    <TextLink  responsiveSize={20}>Support</TextLink>
                </ColumLink>
                <ColumLink>
                    <TextLink  responsiveSize={20} light>Company</TextLink>
                    <br />
                    <TextLink  responsiveSize={20}>About</TextLink>
                    <TextLink  responsiveSize={20}>Our Team</TextLink>
                    <TextLink  responsiveSize={20}>Careers</TextLink>
                    <TextLink  responsiveSize={20}>Contact</TextLink>
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