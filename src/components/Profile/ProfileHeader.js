import React from 'react';
import {Section, SectionTitle} from "../../styles/GlobalComponents";

const ProfileHeader = (props) => (
    <SectionTitle initial={{ x: -500 }} transition={{ ease: "easeInOut", duration: 1 }} animate={{ x: [-500, 0] }}>
        Ryan Garay
    </SectionTitle>
);

export default ProfileHeader;

