import React from 'react';

import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'Completed Research Projects', },
  { number: 5, text: 'Years Programming Experience'},
  { number: 6, text: 'Months Onsite Experience', },
  { number: 70, text: 'Completed Academic Units', },
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
