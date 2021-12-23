
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection,ContentWrapper } from "./styles";

import {TimeLine} from '../../common/TimeLine'

import './index.css';


interface MiddleBlockProps {
  title: string;
  header: string,
  content?: string;
  button: string;
  t: any;
}

const ProfileBlock = ({ title, content, button, t,header }: MiddleBlockProps) => {
 
  return (
    <>
    <MiddleBlockSection>  
    <Slide direction="up">
          <ContentWrapper>
              <p className='header-title'>{t(header)}</p>
              <h6>{t(title)}</h6>
        </ContentWrapper>
        </Slide>
    <TimeLine/>
    </MiddleBlockSection>
    
     </>
  );
};

export default withTranslation()(ProfileBlock);
