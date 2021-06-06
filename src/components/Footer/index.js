import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import  {FooterContainer,FooterWrap,FooterLinksContainer,FooterLink,FooterLinksWrapper,
FooterLinkItems,FooterLinkTitle,SocialMediaWrap,SocialMedia,SocialLogo,
SocialIcons,SocialIconLink,WebsiteRights} from "./FooterElements";
import {FaInstagram, FaTelegram, FaTwitter, FaVk, FaYoutube} from "react-icons/all";


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>О НАС</FooterLinkTitle>
                            <FooterLink to="/AboutPr">О проекте</FooterLink>
                            <FooterLink to="/signin">Пользовательское соглашение</FooterLink>
                            <FooterLink to="/signin">Политика конфиденциальности</FooterLink>
                    </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>ОРГАНИЗАЦИЯМ</FooterLinkTitle>
                            <FooterLink to="/signin">Сотрудничество</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>ИНФОРМАЦИЯ</FooterLinkTitle>
                            <FooterLink to="/signin">Часто задаваемые вопросы</FooterLink>
                            <FooterLink to="/signin">Условия использования</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>ОБРАТНАЯ СВЯЗЬ</FooterLinkTitle>
                            <FooterLink to="/signin">Связаться с нами</FooterLink>
                            <FooterLink to="/signin">Контакты</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                    <SocialLogo to="/" onClick={toggleHome}>GetTravel</SocialLogo>
                    <WebsiteRights>GetTravel © {new Date().getFullYear()} Все права защищены.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="VK">
                                <FaVk />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Telegram">
                                <FaTelegram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;