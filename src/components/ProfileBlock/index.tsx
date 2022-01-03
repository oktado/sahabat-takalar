
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection,ContentWrapper } from "./styles";

import {TimeLine} from '../../common/TimeLine'
import {ButtonProfile} from '../../common/ButtonProfile'

import './index.css';


interface MiddleBlockProps {
  title: string;
  header: string,
  content?: string;
  button: string;
  id?:string;
  t: any;
}

const ProfileBlock = ({id, title, content, button, t,header }: MiddleBlockProps) => {
 
  return (
    <>
    <MiddleBlockSection id={id}>  
    <Slide direction="up" triggerOnce={true}>
          <ContentWrapper>
              <p className='header-title'>{t(header)}</p>
              <h6>{t(title)}</h6>
        </ContentWrapper>
        </Slide>
        <ButtonProfile/>
        <TimeLine/>
    
    </MiddleBlockSection>
    
     </>
  );
};

export default withTranslation()(ProfileBlock);
