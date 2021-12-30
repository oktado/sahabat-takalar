import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import MultimediaContent from "../../content/MultimediaContent.json";
import ProfileContent from "../../content/ProfileContent.json";
import MitraContent from "../../content/MitraContent.json";
import ContactContent from "../../content/ContactContent.json";

const ContactBlock = lazy(() => import("../../components/ContactBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const ProfileBlock = lazy(() => import("../../components/ProfileBlock"));
const MitraBlock = lazy(() => import("../../components/MitraBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Header = lazy(() => import("../../components/Header"));
const Footer = lazy(() => import("../../components/Footer"));

const Home = () => {
  return (
    <>
    <Header/>
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        greetings={IntroContent.greetings}
        title={IntroContent.title}
        content={IntroContent.text}
        job={IntroContent.job}
        name={IntroContent.name}
        icon="takalar-profile.png"
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
      <MitraBlock
        title={MitraContent.title}
        content={MitraContent.text}
        header={MitraContent.header}
      />
      <ContactBlock
        title={ContactContent.title}
        content={ContactContent.text}
        header={ContactContent.header}
      />
    </Container>
    <Footer/>
    </>
  );
};

export default Home;
