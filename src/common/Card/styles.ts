import styled from "styled-components";

export const StyledCard = styled("div")<any>`
  height: 411px;
  width: 350px;
  background: linear-gradient(145deg, #202020, #272727);
  box-shadow:  5px 5px 24px #1c1c1c,
             -5px -5px 24px #2c2c2c;
  border-radius: 20px;
  padding: 25px;
  margin-right: 30px;
  margin-bottom: 30px;
  overflow:hidden;
`;


export const CardWrapper = styled("div")`
display: flex;
flex-wrap: wrap;
margin-top: 75px;
  @media only screen and (max-width: 768px) {
    width: 390px;
  }
`;

