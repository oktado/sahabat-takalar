import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
 
  padding: 0 30px;
  background-color:#202020;
  height: 90px;
  position: fixed;
  left: 0px;
  z-index:999999;
  width:100%;
 
 
  @media only screen and (max-width: 426px) {
  padding: 1rem 0.5rem;
  background-color:#202020;
  height: 90px;
  position: fixed;
  left: 0px;
  z-index:999999;
  width:100%;
  }

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #BDBDBD;
  margin-top: 10px
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled("div")<any>`
  cursor: pointer;
  width: ${(p) => (p.width ? "100%" : "110px")};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }
  display: none;
  svg {
    fill: #fff;
  }
  
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: #ffff
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 13px;
  letter-spacing:0.7px;
  color: #c4cfde;
  transition: color 0.2s ease-in;
  margin: 0.5rem 1.5rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  font-size: 13px
  color: #404041;
  font-family: 'Poppins', sans-serif;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)<any>`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #c4cfde

  &:hover,
  &:active,
  &:focus {
    color: #ffffff;  
  }
`;
