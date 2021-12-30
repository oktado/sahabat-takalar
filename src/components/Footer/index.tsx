import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import ProfilePicture from '../../common/ProfilePicture'
import "./index.css";
import {
  FooterSection,
} from "./styles";



const Footer = ({ t }: any) => {



  return (
    <>
      <FooterSection>
        <div className="copyright-footer">
          <div className="logo-footer">
            <ProfilePicture src={'img/svg/takalar-logo.png'}/>
          </div>
          <div className="copyright">© 2022 All rights reserved by Sahabat Takalar</div>
        </div>
      </FooterSection>
   
    </>
  );
};

export default withTranslation()(Footer);
