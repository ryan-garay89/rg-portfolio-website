import React from 'react'
import {ProfileImgDiv, ProfImg} from "./ProfileImageStyles";
import {SectionDivider, SectionTitle} from "../../styles/GlobalComponents";

const ProfileImage = () => (
    <div styles={{ justifySelf: 'left' }} >
        <SectionDivider style={{ marginTop: '15px' }} />
        <ProfImg src={"/images/profile_img.jpg"} />
    </div>
);

export default ProfileImage;