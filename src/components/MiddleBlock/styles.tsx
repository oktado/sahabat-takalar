import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  padding: 5rem 0 3rem;
  

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Header = styled("p")`
  color:red;
  letter-spacing:0;
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;


export const CardWrapper = styled("div")`
display: flex;
flex-wrap: wrap;
margin-top: 75px;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
