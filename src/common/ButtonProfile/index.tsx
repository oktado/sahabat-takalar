import {useState} from "react";
import './index.css'

export const ButtonProfile = () => {
   const [isHover,setIsHover] = useState("")
   const [isActive,setIsActive] = useState("")

   const menuProfile = ["Education","Professional Skills"]
    
    return (

        <div className="container-btn-profile">
        {menuProfile.map((menu,index) => {
            return(
            <div key={index} className={`${isHover === menu || isActive === menu ? "btn-profile-active" : "btn-profile"}`} onMouseEnter={()=>setIsHover(menu)} onMouseLeave={() => setIsHover("")} onClick={()=>setIsActive(menu)}>
            <span className={`${isHover === menu || isActive === menu ? "title-btn-profile-hover" : "title-btn-profile"}`}>{menu}</span>
            </div>
            )
        } )}
        </div>
    )
   
    };
  