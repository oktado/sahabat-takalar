import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection,ContentWrapper } from "./styles";

import ContactForm from '../../components/ContactForm'


import './index.css'





interface ContactBlockProps {
  title: string;
  header: string,
  content?: string;
  button?: string;
  t: any;
}

const ContactBlock = ({ title, content, button, t,header }: ContactBlockProps) => {
 
  return (
    <>
    <MiddleBlockSection>  
      <Slide direction="up">
          <div className='title-contact'>
             <div className="container-title-contact">
             <p className='header-title'>{t(header)}</p>
              <h6>{t(title)}</h6>
             </div>
          </div>
      </Slide>
    </MiddleBlockSection>
    <ContactForm/>
     </>
  );
};

export default withTranslation()(ContactBlock);