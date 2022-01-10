import React from 'react'
import {ProfImg} from "./ProfileImageStyles";
import {SectionDivider} from "../../styles/GlobalComponents";

const ProfileImage = () => (
    <div>
        <SectionDivider style={{ marginTop: '15px' }}/>
        <ProfImg src={"/images/profile_img.jpg"} />
    </div>
);

export default ProfileImage;