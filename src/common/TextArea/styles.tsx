import styled from "styled-components";

export const StyledContainer = styled("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`;

export const StyledTextArea = styled("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
  background:#191b1e;
  border: 2px solid #191b1e;
  box-shadow: inset 6px 6px 12px #121315,
            inset -6px -6px 12px #212327;
  border-radius:10px;
  color: #e4e6ea;
`;

export const Label = styled("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
  color: #e4e6ea;
  font-family: "Montserrat",sans-serif;
  font-size:12px;
`;


