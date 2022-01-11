import React from 'react';
import {ProfileSection, Section, SectionDivider, SectionText, SectionTitle} from '../styles/GlobalComponents';
import {Layout} from "../layout/Layout";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import ProfileImage from "../components/ProfileImage/ProfileImage";
import ProfileBio from "../components/ProfileBio/ProfileBio";

function Bio() {
    return (
        <Layout>
            <ProfileSection grid id="main">
                <ProfileHeader />
                <span style={{visibility: 'hidden'}} />
                <ProfileImage/>
                <ProfileBio/>
            </ProfileSection>
        </Layout>
    )
};

export default Bio;