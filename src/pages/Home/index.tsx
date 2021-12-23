import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import MultimediaContent from "../../content/MultimediaContent.json";
import ProfileContent from "../../content/ProfileContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const ProfileBlock = lazy(() => import("../../components/ProfileBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        greetings={IntroContent.greetings}
        title={IntroContent.title}
        content={IntroContent.text}
        job={IntroContent.job}
        name={IntroContent.name}
        icon="professional-man.jpg"
        id="intro"
      />
      <MiddleBlock
        header={MiddleBlockContent.header}
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
       <MiddleBlock
        header={MultimediaContent.header}
        title={MultimediaContent.title}
        content={MultimediaContent.text}
        button={MultimediaContent.button}
      />
       <ProfileBlock
        header={ProfileContent.header}
        title={ProfileContent.title}
        content={ProfileContent.text}
        button={ProfileContent.button}
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
