import styled from 'styled-components';
import {motion} from "framer-motion";

export const ProfImg = styled.img`
  width:70%;
  height:80%;
  object-fit: cover;
  overflow: hidden;
  margin-top: 35px;
  padding: 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 20px;
    width: 85%;
    height: 40%;
`
