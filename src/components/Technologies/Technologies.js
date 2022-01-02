import React from 'react';
import { FaNodeJs } from 'react-icons/fa';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FiFigma } from 'react-icons/fi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
    <Section nonpadding id="tech">
        <SectionDivider />
        <SectionTitle main >Technologies</SectionTitle>
        <SectionText>
            I've worked with a range of.... (tech stack / experience).
        </SectionText>
        <List>
            <ListItem>
                <DiReact size="3rem" />
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Experience with: <br />
                        React.js <br />
                        Next.js <br />
                        Ruby On Rails <br />
                        jQuery
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <FaNodeJs size="3rem" style={{ padding: '3px'}} />
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Experience with: <br />
                        Node.js <br />
                        Next.js <br />
                        Ruby On Rails <br />
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size="3rem" />
                <ListContainer>
                    <ListTitle>DB Languages</ListTitle>
                    <ListParagraph>
                        Experience with: <br />
                        GraphQL <br />
                        SQL <br />
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
