import { useState } from "react";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection,ContentWrapper } from "./styles";

import {MitraButton} from '../../common/MitraButton'
import ModalMitra  from '../../common/ModalMitra'


import './index.css';


interface MitraBlockProps {
  title: string;
  header: string,
  content?: string;
  button?: string;
  t: any;
}

const MitraBlock = ({ title, content, button, t,header }: MitraBlockProps) => {
  const [visibleModalMitra, setVisibleModalMitra] = useState(false);
  return (
    <>
    <MiddleBlockSection>  
      <Slide direction="up" triggerOnce={true}>
          <ContentWrapper>
              <p className='header-title'>{t(header)}</p>
              <h6>{t(title)}</h6>
          </ContentWrapper>
      </Slide>
        <MitraButton openModalMitra={() => setVisibleModalMitra(true)} />
        <ModalMitra closeModalMitra={() => setVisibleModalMitra(false)} visibleModalMitra={visibleModalMitra}/>
    </MiddleBlockSection>
    
     </>
  );
};

export default withTranslation()(MitraBlock);
