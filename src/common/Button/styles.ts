import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: #212121;
  -webkit-box-shadow: 8px 8px 13px #171717, -8px -8px 13px #232323;
  box-shadow: 8px 8px 13px #171717, -8px -8px 13px #252525;
  font-size: 14px;
  font-family:"Poppins",sans-serif;
  font-weight: 400;
  font-weight: 700;
  width: 30%;
  border-radius: 10px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  transition: all 0.3s ease-in-out;
  color: red;

  &:hover {
    -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
  transition: all 0.3s ease-in-out;
  color: red; 
  }
`;
