import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
          <SectionTitle main center>
              Welcome To <br />
              My Personal Portfolio
          </SectionTitle>
          <SectionText>
              I'm a 3rd year computer science major at The University of California, Berkeley, and a rising software Engineer passionate about people & technology.
          </SectionText>
          <Button onClick={() => window.location = "https://google.com"}>Learn More</Button>
      </LeftSection>
  </Section>
);

export default Hero;