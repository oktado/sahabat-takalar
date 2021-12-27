
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection,ContentWrapper } from "./styles";

import {MitraButton} from '../../common/MitraButton'


import './index.css';


interface MitraBlockProps {
  title: string;
  header: string,
  content?: string;
  button?: string;
  t: any;
}

const MitraBlock = ({ title, content, button, t,header }: MitraBlockProps) => {
 
  return (
    <>
    <MiddleBlockSection>  
      <Slide direction="up" triggerOnce={true}>
          <ContentWrapper>
              <p className='header-title'>{t(header)}</p>
              <h6>{t(title)}</h6>
          </ContentWrapper>
      </Slide>
        <MitraButton/>
    </MiddleBlockSection>
    
     </>
  );
};

export default withTranslation()(MitraBlock);
