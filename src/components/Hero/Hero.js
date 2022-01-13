import React from 'react';

import {AnimatedTitle, Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { motion } from 'framer-motion';

const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: .5,
            staggerChildren: 0.02,
        },
    },
};

const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
    }
};

const hero_text1 = "I'm a first-generation college student at The";
const hero_text2 = "University of California, Berkeley, where I study";
const hero_text3 = "computer science and creative writing; I'm";
const hero_text4 = "passionate about people, art, & technology.";

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
          <SectionTitle main center initial={{ x: -500 }} transition={{ ease: "easeInOut", duration: 1 }} animate={{ x: [-500, 0] }}>
              Welcome! <br />
              My Name's Ryan.
          </SectionTitle>
          <SectionText initial="hidden" variants={sentence} animate="visible">
              {hero_text1.split("").map((char, index) => {
                  return (
                      <motion.span key={char + "-" + index} variants={letter}>
                          {char}
                      </motion.span>
                  )
              })}
              <br />
              {hero_text2.split("").map((char, index) => {
                  return (
                      <motion.span key={char + "-" + index} variants={letter}>
                          {char}
                      </motion.span>
                  )
              })}
              <br />
              {hero_text3.split("").map((char, index) => {
                  return (
                      <motion.span key={char + "-" + index} variants={letter}>
                          {char}
                      </motion.span>
                  )
              })}
              <br />
              {hero_text4.split("").map((char, index) => {
                  return (
                      <motion.span key={char + "-" + index} variants={letter}>
                          {char}
                      </motion.span>
                  )
              })}
          </SectionText>
          <Button onClick={() => window.location.href = "/profile#main"}>Learn More</Button>
      </LeftSection>
  </Section>
);

export default Hero;