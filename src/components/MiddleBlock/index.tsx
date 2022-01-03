import React, { useState } from 'react';
import { Button,Row,Col} from "antd";
import Input from "../../common/Input";
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
  location?: string;
  fetchUrl?: string;
  t: any;
}

const MiddleBlock = ({ title, content, button, t,header,setIsModalOpen,isModalOpen,location,fetchUrl }: MiddleBlockProps) => { 
  return (
    <>
    <MiddleBlockSection>  
    <Slide direction="up" triggerOnce={true}>
          <ContentWrapper>
                 <Row>
                    <Col xl={20}>
                    <div className='container-title-berita'>
                      <p className='header-title'>{t(header)}</p>
                      <h6>{t(title)}</h6>
                    </div>
                    </Col>  
                    <Col xl={4}>
                    {location !== "/" && <div style={{width:"100%"}}>
                      <Input
                      type="text"
                      placeholder="Search..."
                      value=""  
                      /> 
                    </div>} 
                    </Col>
                 </Row>   
        </ContentWrapper>
        </Slide>
     <CardNews fetchUrl={fetchUrl} route={header} showModalContent={() => setIsModalOpen(true)}  header={CardContent?.header} title={CardContent?.title} img={CardContent?.img} content={CardContent?.content} location={location}/>
    </MiddleBlockSection>
    <ModalContent visible={isModalOpen} closeModal={() => setIsModalOpen(false)} />
     </>
  );
};

export default withTranslation()(MiddleBlock);
