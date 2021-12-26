import { withTranslation } from "react-i18next";
import { Container, TextWrapper, Content } from "./styles";
import SocialMedia from '../SocialMedia/index'

import './index.css'

interface Props {
  title?: string;
  content: string;
  t: any;
}

const Block = ({ title, content, t }: Props) => {
  return (
    <Container>
      <div className="container-img-contact">
      </div>
     <div className="container-text-contact">
     <p className="contact-name">{t(title)}</p>
      <p className="contact-job">Chief Operating Officer</p>
      <p className="contact-description">I am available for freelance work. Connect with me via and call in to my account.</p>
      <p className="contact-description" style={{marginBottom:"0px"}}>Phone:<span style={{color:"##e4e6ea"}}> +01234567890</span></p>
      <p className="contact-description">Email:<span style={{color:"##e4e6ea"}}> admin@example.com</span></p>
     </div>
      <SocialMedia/>
    </Container>
  );
};

export default withTranslation()(Block);
