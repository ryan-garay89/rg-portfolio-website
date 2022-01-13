import Link from 'next/link';
import React from 'react';
import {AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { AiFillHome } from 'react-icons/ai'
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
      <Div1>
          <Link href="/">
              <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '21px' }}>
                  <AiFillHome size="3rem" style={{ padding: '5px' }} /> <Span>Home</Span>
              </a>
          </Link>
      </Div1>
      <Div2>
          <li>
              <Link href="/#projects">
                  <NavLink>Projects</NavLink>
              </Link>
          </li>
          <li>
              <Link href="/#tech">
                  <NavLink>Technology</NavLink>
              </Link>
          </li>
          <li>
              <Link href="/#about">
                  <NavLink>About</NavLink>
              </Link>
          </li>
      </Div2>
      <Div3>
          <SocialIcons href="https://github.com/ryan-garay89" target="_blank">
              <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/ryan-garay-b11462194/" target="_blank">
              <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/ryan.garay.399" target="_blank">
              <AiFillFacebook size="3rem" />
          </SocialIcons>
      </Div3>
  </Container>
);

export default Header;
