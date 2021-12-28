import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection style={{}}>
          <SectionTitle main center>
              Welcome! <br />
              My Name's Ryan
          </SectionTitle>
          <SectionText>
              I'm a first-generation college student at The University of California, Berkeley,
              where I study computer science and creative writing; I'm passionate about people, art, & technology.
          </SectionText>
          <Button onClick={() => window.location = "https://google.com"}>Learn More</Button>
      </LeftSection>
  </Section>
);

export default Hero;