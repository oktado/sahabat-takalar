import styled from "styled-components";

export const Content = styled("p")`
  margin-top: 1.5rem;
`;

export const Container = styled("div")`
  padding: 30px;
  align-items:center;
  max-width: 700px;
  height: 771px;
  background: #212121;
  -webkit-box-shadow: 8px 8px 13px #171717, -8px -8px 13px #232323;
  box-shadow: 8px 8px 13px #171717, -8px -8px 13px #252525;
  margin-right: 50px;
  border-radius: 15px;

  @media only screen and (max-width: 768px) {
    width: 365px;
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 376px) {
    width: 325px;
    height: 775px;
}

`;

export const TextWrapper = styled("div")`
  border-radius: 3rem;
  max-width: 400px;
`;
