import React from 'react';

import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3, text: 'Completed Internships', },
  { number: 6, text: 'Years Programming Experience'},
  { number: 9, text: 'Months Onsite Experience', },
  { number: 90, text: 'Completed Academic Units', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Accomplishments</SectionTitle>
    <Boxes>
        {data.map((card, index) => (
            <Box key={index}>
                <BoxNum>{card.number}+</BoxNum>
                <BoxText>{card.text}</BoxText>
            </Box>
        ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
