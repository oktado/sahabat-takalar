import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  position: relative;
  padding: 10rem 0 8rem 0rem;
  border-bottom: 3px solid black;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;
export const ContentStyling = styled("span")`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0;
  color: #c4cfde;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 706px;

  @media only screen and (max-width: 575px) {
    padding-bottom: 0rem;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
export const SectionSocialMedia = styled("div")`
  
  margin-top: 200px;
  
  @media screen and (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 30px;
  }

`;

export const SvgResponsive = styled("img")`
  
  @media screen and (max-width: 768px) {
   width:50%;
  }

`;
