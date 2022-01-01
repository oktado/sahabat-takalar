import React, { useState } from 'react';
import { Button} from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection,ContentWrapper } from "./styles";


import CardContent from "../../content/CardContent.json";

import {CardNews} from '../../common/Card'
import ModalContent from '../../common/Modal'

import './index.css';


interface MiddleBlockProps {
  title: string;
  header: string,
  content?: string;
  button: string;
  setIsModalOpen?: () => void;
  isModalOpen?: boolean;
  t: any;
}

const MiddleBlock = ({ title, content, button, t,header,setIsModalOpen,isModalOpen }: MiddleBlockProps) => { 
  return (
    <>
    <MiddleBlockSection>  
    <Slide direction="up" triggerOnce={true}>
          <ContentWrapper>
              <p className='header-title'>{t(header)}</p>
              <h6>{t(title)}</h6>
        </ContentWrapper>
        </Slide>
     <CardNews showModalContent={() => setIsModalOpen(true)}  header={CardContent?.header} title={CardContent?.title} img={CardContent?.img} content={CardContent?.content}/>
    </MiddleBlockSection>
    <ModalContent visible={isModalOpen} closeModal={() => setIsModalOpen(false)} />
     </>
  );
};

export default withTranslation()(MiddleBlock);
