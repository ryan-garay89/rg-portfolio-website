import styled from 'styled-components';
import {motion} from "framer-motion";

export const BioContainer = styled(motion.div)`
  max-width: 1040px;
  max-height: 580px;
  border-radius: 10px;
  background: #1a1a1a;
  padding: .9rem;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  overflow-y: scroll;
  scroll-behavior: smooth;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 20px;
    max-height: 400px;
  }
`