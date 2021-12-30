import {useState} from "react";
import {Row,Col} from 'antd'
import { Fade } from "react-awesome-reveal";

import "./index.css"


const mitraData = [
    {
        menu : 'Community',
        list : [
            {
                logo: "../../../public/img/icons/logo192.png",
                name: "Com 1"
            },
            {
                 logo: "../../../public/img/icons/logo192.png",
                name: "Com 2"
            },
            {
                 logo: "../../../public/img/icons/logo192.png",
                name: "Com 3"
            },
            {
                 logo: "../../../public/img/icons/logo192.png",
                name: "Com 4"
            },
            {
                 logo: "../../../public/img/icons/logo192.png",
                name: "Com 5"
            },
            {
                 logo: "../../../public/img/icons/logo192.png",
                name: "Com 6"
            },
        ]
    },
    { menu : 'Sponsor',
    list : [
        {
             logo: "../../../public/img/icons/logo192.png",
            name: "Sponsor 1"
        },
        {
             logo: "../../../public/img/icons/logo192.png",
            name: "Sponsor 2"
        },
        {
             logo: "../../../public/img/icons/logo192.png",
            name: "Sponsor 3"
        },
        {
             logo: "../../../public/img/icons/logo192.png",
            name: "Sponsor 4"
        },
        {
             logo: "../../../public/img/icons/logo192.png",
            name: "Sponsor 5"
        },
        {
             logo: "../../../public/img/icons/logo192.png",
            name: "Sponsor 6"
        },
    ]
    },
    


];


interface MitraButtonProps {
    openModalMitra: () => void;
  }


export const MitraButton = ({openModalMitra}:MitraButtonProps) =>  {
    const [isHover,setIsHover] = useState("Community")
   const [isActive,setIsActive] = useState("Community")
   return (
        <Fade triggerOnce={true}>
            <div className='container-mitra'>
                <Row gutter={24}>
                        <Col sm={24} xs={24} lg={8} xl={8}>
                            <div className="container-mitra-menu">
                               {mitraData.map((menu,index) => {
                                   return (
                                    <div key={index} className={`${isHover === menu.menu || isActive === menu.menu ? "mitra-menu-active" : "mitra-menu"}`} onMouseEnter={()=>setIsHover(menu.menu)} onMouseLeave={() => setIsHover("")} onClick={()=>setIsActive(menu.menu)} >
                                        <p className={`${isHover === menu.menu || isActive === menu.menu ? "mitra-name-hover" : "mitra-name"}`}>{menu.menu}</p>    
                                    </div>
                                   )
                               })}       
                            </div>
                        </Col>
                        <Col sm={24} xs={24} lg={16} xl={16}>
                            <div className='container-mitra-logo'>
                                <div className="mitra-logo"  onClick={openModalMitra}>
                                   <div className='thumbnail'>
                                       <img className="img-mitra" src='img/svg/takalar-logo.png' />
                                   </div>
                                    <div className='thumbnail-name'>Name</div>
                                </div>
                            </div>
                        </Col>
                </Row>
            </div>
        </Fade>
   )
};