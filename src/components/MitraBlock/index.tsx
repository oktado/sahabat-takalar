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
  setIsModalMitraOpen?: () => void;
  isModalMitraOpen?: boolean;
  t: any;
}

const MitraBlock = ({ title, content, button, t,header,setIsModalMitraOpen,isModalMitraOpen }: MitraBlockProps) => {
  return (
    <>
    <MiddleBlockSection>  
      <Slide direction="up" triggerOnce={true}>
          <ContentWrapper>
              <p className='header-title'>{t(header)}</p>
              <h6>{t(title)}</h6>
          </ContentWrapper>
      </Slide>
        <MitraButton openModalMitra={() => setIsModalMitraOpen(true)} />
        <ModalMitra closeModalMitra={() => setIsModalMitraOpen(false)} visibleModalMitra={isModalMitraOpen}/>
    </MiddleBlockSection>
    
     </>
  );
};

export default withTranslation()(MitraBlock);
