import {useHistory} from 'react-router-dom'
import { withTranslation } from "react-i18next";

import './index.css'

interface ProfilePictureProps {
    src : string
    pathname?: string
}

 const ProfilePicture = ({src,pathname} : ProfilePictureProps) => {
     const history = useHistory();
    return (
        <>
        <div className='profile-picture' onClick={()=>history.push(pathname)}>
            <img src={src}/>
            <span className="text-logo">SAHABAT TAKALAR</span>
        </div>
        </>
    )
}

export default withTranslation()(ProfilePicture);