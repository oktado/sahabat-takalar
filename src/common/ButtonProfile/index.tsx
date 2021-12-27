import {useState} from "react";
import {Fade} from 'react-awesome-reveal'
import './index.css'

export const ButtonProfile = () => {
   const [isHover,setIsHover] = useState("Education")
   const [isActive,setIsActive] = useState("Education")

   const menuProfile = ["Education","Professional Skills","Achievment"]
    
    return (
        <Fade triggerOnce={true}>
        <div className="container-btn-profile">
        {menuProfile.map((menu,index) => {
            return(
            <div key={index} className={`${isHover === menu || isActive === menu ? "btn-profile-active" : "btn-profile"}`} onMouseEnter={()=>setIsHover(menu)} onMouseLeave={() => setIsHover("")} onClick={()=>setIsActive(menu)}>
            <span className={`${isHover === menu || isActive === menu ? "title-btn-profile-hover" : "title-btn-profile"}`}>{menu}</span>
            </div>
            )
        } )}
        </div>
        </Fade>
    )
    };
  