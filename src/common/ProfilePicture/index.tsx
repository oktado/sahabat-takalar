import { withTranslation } from "react-i18next";

import './index.css'

interface ProfilePictureProps {
    src : string
}

 const ProfilePicture = ({src} : ProfilePictureProps) => {
    return (
        <>
        <div className='profile-picture'>
            <img src={src}/>
            <span className="text-logo">SAHABAT TAKALAR</span>
        </div>
        </>
    )
}

export default withTranslation()(ProfilePicture);