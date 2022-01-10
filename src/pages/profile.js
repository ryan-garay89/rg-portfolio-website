import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../styles/GlobalComponents';
import {Layout} from "../layout/Layout";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileImage from "../components/ProfileImage/ProfileImage";
import ProfileBio from "../components/ProfileBio/ProfileBio";

function Profile() {
    return (
        <Layout>
            <Section grid>
                <ProfileHeader />
                <span style={{visibility: 'hidden'}}/>
                <ProfileImage/>
                <ProfileBio/>
            </Section>
        </Layout>
    )
};

export default Profile