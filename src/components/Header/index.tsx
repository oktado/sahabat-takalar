import { useState, useEffect } from "react";
import {useLocation,useHistory} from 'react-router-dom'
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { ButtonNavbar } from "../../common/ButtonNavbar";
import ProfilePicture from '../../common/ProfilePicture'
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

import "./index.css"


interface HeaderProps {
  t?:any;
  isModalOpen: boolean;
  isModalMitraOpen : boolean;
}

const Header = ({t,isModalOpen,isModalMitraOpen} : HeaderProps) => {
  const [visible, setVisibility] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [pathname, setPathname] = useState("");

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setPathname(location.pathname)
    console.log(pathname)
  },[])

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {


    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start"
      });
      setVisibility(false);
    };

    const handleMenuNavbar = (component:string) => {
    if(location.pathname !== "/") {
      history.push("/");
      setTimeout(() => {
        scrollTo(component);
      },1200)
    } else {
      scrollTo(component)
    }
    }

    return (
      <>
        <CustomNavLinkSmall onClick={() => handleMenuNavbar("Home")}>
          <Span>{t("HOME")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => handleMenuNavbar("Berita")}>
          <Span>{t("BERITA")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => handleMenuNavbar("Multimedia")}>
          <Span>{t("MULTIMEDIA")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => handleMenuNavbar("Profile")}>
          <Span>{t("PROFILE")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => handleMenuNavbar("Mitra")}>
          <Span>{t("MITRA")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => handleMenuNavbar("Contact")}>
          <Span>{t("CONTACT")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "99px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            {isLogin ? <span className='user-login-text'>Hi, <span style={{color: "red"}}>User</span></span> : <div className='btn-nav-login' onClick={() => setIsLogin(true)}>{t("LOGIN")}</div>}
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection style={{display : isModalOpen || isModalMitraOpen ? "none" : "", transition:"0,5s"}} >
      <Container >
        <Row justify="space-between" >
            <ProfilePicture pathname="/" src={'img/svg/takalar-logo.png'}/>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
