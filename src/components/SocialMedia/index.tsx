import { withTranslation } from "react-i18next";
import {FiFacebook,FiInstagram,FiTwitter} from 'react-icons/fi'
import "./index.css"


interface Props {
  component?: string,
}

const SocialMedia = ({ component }: Props) => {
  return (
    <>
    <p className="title-social-media">FIND WITH ME</p>
    <div className='container-icon'>
    <div className="icon">
        <FiFacebook  width="30px" height="30px" color="#ffff" />
    </div>
    <div className="icon">
        <FiInstagram  width="30px" height="30px" color="#ffff" />
    </div>
    <div className="icon">
        <FiTwitter  width="30px" height="30px" color="#ffff" />
    </div>
    </div>
    </>
  );
};

export default withTranslation()(SocialMedia);