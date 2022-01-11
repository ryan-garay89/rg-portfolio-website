import React from 'react'
import {SectionText, SectionTitle} from "../../styles/GlobalComponents";
import {BioContainer} from "./ProfileBioStyles";

const ProfileBio = () => (
    <BioContainer initial={{ x: 500 }} transition={{ ease: "easeInOut", duration: 1 }} animate={{ x: [500, 0] }}>
    <SectionText style={{ fontSize: '17px' }}>
        I was born and raised in San Antonio, Texas, where I lived until I was 18 years old.
        Both of my parents have a high-school education, and come from low-income households, but nonetheless gave me a
        spectacular childhood. They instilled in me a drive to work and challenge myself—qualities which I attribute to
        my success after high school. I moved to Berkeley, California when I was 18 to attend college, where I currently
        study computer science and creative writing. <br /> I have a passion for technology and its ability to make the world
        more open, accessible, and equitable and am particularly fascinated by UI/UX design and research. I believe the
        knowledge of designing web applications should be akin to reading and writing, given how integral the internet
        has become in modern society. In my spare time, I enjoy reading, writing, and discussing film, music, and literature.
        I joined Berkeley's newspaper The Daily Californian during my freshman year of college, where I cover various local
        and international arts & entertainment news.
    </SectionText>
    </BioContainer>
);

export default ProfileBio;