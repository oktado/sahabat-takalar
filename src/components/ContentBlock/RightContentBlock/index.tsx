import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import SocialMedia from '../../SocialMedia/index'



import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ContentStyling,
  SectionSocialMedia,
  SvgResponsive
} from "./styles";

import './index.css'

const RightBlock = ({
  title,
  content,
  icon,
  greetings,
  job,
  name,
  t,
  id
}: ContentBlockProps) => {
  return (
    <RightBlockContainer id={id}>
      <Fade direction="right" triggerOnce={true}>
        <Row justify="space-between" align="top" >
          <Col lg={12} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <p>{t(greetings)}</p>
              <Row><h6>{t(title)}</h6><span className="name">{t(name)}</span></Row>
              <h6>{t(job)}</h6>
              <Content><ContentStyling><span>{t(content)}</span></ContentStyling></Content>
            </ContentWrapper>
            <SectionSocialMedia>
              <SocialMedia/>
            </SectionSocialMedia>
          </Col>
          <Col lg={10} md={11} sm={12} xs={24}>  
          <div className="container-photo-profile">
            <img className="photo-profile" src={`/img/svg/${icon}`} alt={icon}   />
          </div>
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
