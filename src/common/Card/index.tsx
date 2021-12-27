
import { CardProps, } from "../types";
import { CardWrapper } from "./styles";
import { Fade } from "react-awesome-reveal";
import './index.css'




export const CardNews = ({
    img,
    header,
    title,
    content,
  }: CardProps) => (
    <>
    <Fade triggerOnce={true} >
    <CardWrapper>
    <div className="container-card">
      <div className="container-img">
      <img className='img-card' src={img} height="248px" width="100%" />
      </div>
        <p className='title-card'>{title}</p>
        <p className='header-card'>{header}</p>
    </div>

    <div className="container-card">
      <div className="container-img">
      <img className='img-card' src={img} height="248px" width="100%" />
      </div>
        <p className='title-card'>{title}</p>
        <p className='header-card'>{header}</p>
    </div>
    <div className="container-card">
      <div className="container-img">
      <img className='img-card' src={img} height="248px" width="100%" />
      </div>
        <p className='title-card'>{title}</p>
        <p className='header-card'>{header}</p>
    </div>
    <div className="container-card">
      <div className="container-img">
      <img className='img-card' src={img} height="248px" width="100%" />
      </div>
        <p className='title-card'>{title}</p>
        <p className='header-card'>{header}</p>
    </div>
    <div className="container-card">
      <div className="container-img">
      <img className='img-card' src={img} height="248px" width="100%" />
      </div>
        <p className='title-card'>{title}</p>
        <p className='header-card'>{header}</p>
    </div>
    <div className="container-card">
      <div className="container-img">
      <img className='img-card' src={img} height="248px" width="100%" />
      </div>
        <p className='title-card'>{title}</p>
        <p className='header-card'>{header}</p>
    </div>
    </CardWrapper>
    </Fade>
    </>
  );