import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";


import "./index.css"

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  ) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={10} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={14} md={12} sm={24} xs={24}>
          <Slide direction="right">
           <div className="container-form-contact">
           <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Row>
              <Col span={12} className="input-contact">
                <Input
                  type="text"
                  name="YOUR NAME"
                  placeholder="YOUR NAME"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={12} className="input-contact">
              <Input
                  type="number"
                  name="PHONE NUMBER"
                  placeholder="PHONE NUMBER"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="number" />
              </Col>
              </Row>
              <Col span={24}>
                <Input
                  type="email"
                  name="EMAIL"
                  placeholder="EMAIL"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="YOUR MESSAGE"
                  value={values.message || ""}
                  name="MESSAGE"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{t("Submit")}</Button>
              </ButtonContainer>
            </FormGroup>
           </div>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
