import React from 'react';
import {AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';

import {Div3, SocialIcons} from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
        <LinkList>
            <LinkColumn>
                <LinkTitle>Call</LinkTitle>
                <LinkItem href="tel:210-621-4244">(210)-621-4244</LinkItem>
            </LinkColumn>
            <LinkColumn>
                <LinkTitle>Email</LinkTitle>
                <LinkItem href="mailto:ryan1989@berkeley.edu">ryan1989@berkeley.edu</LinkItem>
            </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
            <CompanyContainer>
                <Slogan>"It's easier to ask forgiveness than it is to get permission" - Grace Hopper</Slogan>
            </CompanyContainer>
            <SocialIcons href="https://github.com/ryan-garay89" target="_blank">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/ryan-garay-b11462194/" target="_blank">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.facebook.com/ryan.garay.399" target="_blank">
                <AiFillFacebook size="3rem" />
            </SocialIcons>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
