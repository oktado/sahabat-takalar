import { ButtonNav } from "./styles";
import { ButtonProps } from "../types";

export const ButtonNavbar = ({
  color,
  fixedWidth,
  children,
  onClick,
}: ButtonProps) => (
  <ButtonNav color={color} fixedWidth={fixedWidth} onClick={onClick}>
    {children}
  </ButtonNav>
);
