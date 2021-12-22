
import { CardProps } from "../types";
import { StyledCard } from "./styles";

import './index.css'




export const CardNews = ({
    img,
    header,
    title,
    content,
  }: CardProps) => (
    <StyledCard>
        <img src={img} height="248px" width="100%" style={{borderRadius: "5px"}}/>
        <p className='title-card'>{title}</p>
        <p className='header-card'>{header}</p>
    </StyledCard>
  );