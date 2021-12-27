import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection,ContentWrapper } from "./styles";

import CardContent from "../../content/CardContent.json";

import {CardNews} from '../../common/Card'

import './index.css';


interface MiddleBlockProps {
  title: string;
  header: string,
  content?: string;
  button: string;
  t: any;
}

const MiddleBlock = ({ title, content, button, t,header }: MiddleBlockProps) => {
 
  return (
    <>
    <MiddleBlockSection>  
    <Slide direction="up" triggerOnce={true}>
          <ContentWrapper>
              <p className='header-title'>{t(header)}</p>
              <h6>{t(title)}</h6>
        </ContentWrapper>
        </Slide>
     <CardNews header={CardContent.header} title={CardContent.title} img={CardContent.img} content={CardContent.content}/>
    </MiddleBlockSection>
    
     </>
  );
};

export default withTranslation()(MiddleBlock);
