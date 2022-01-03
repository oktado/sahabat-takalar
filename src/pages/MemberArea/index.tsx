import { lazy,useState } from "react";
import {Row,Col} from 'antd';
import Select from 'react-select'
import Input from "../../common/Input";

import MiddleBlockContent from "../../content/MiddleBlockContent.json";
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const Header = lazy(() => import("../../components/Header"));

import './index.css'

const  MemberArea = (props) => {
    const [isModalOpen,setIsModalOpen] = useState(false)

    const fetchUrl = "https://jsonplaceholder.typicode.com/albums/1/photos"

    return( 
        <>
        <Header/>
        <div className='container-member-area'>      
            <div className="container-member">
                <div className="row-member-data">
                    <div  className="container-member-text">
                        <p className="member-title">Personal Information</p>
                    </div>
                    <div className="container-btn-member"> 
                        <div className="btn-member-area" style={{color:"#4391f7"}}>Save Chages</div>   
                        <div className="btn-member-area" style={{marginLeft: "10px",color:"red"}}>Cancel</div>   
                    </div>
                </div>
                <div className="row-member-data">
                    <div  className="container-member-text">
                        <span className="member-text">Profile Picture</span>
                    </div>
                    <div className="container-img-avatar">
                        <img className="img-avatar" src="img/svg/takalar-logo.png"/>
                    </div>
                </div>
                <div className="row-member-data">
                    <div className="container-member-text">
                        <span className="member-text">First Name</span>
                    </div>
                    <div>
                     <div className="container-input-member">
                        <Input
                        type="text"
                        placeholder="First Name"
                        value=""   
                        />
                    </div>
                    </div>
                </div>
                <div className="row-member-data">
                    <div className="container-member-text">
                        <span className="member-text">Last Name</span>
                    </div>
                    <div>
                     <div className="container-input-member">
                        <Input
                        type="text"
                        placeholder="Last Name"
                        value=""   
                        />
                    </div>
                    </div>
                </div>
                <div className="row-member-data">
                    <div className="container-member-text">
                        <span className="member-text">Address</span>
                    </div>
                    <div>
                     <div className="container-input-member">
                        <Input
                        type="text"
                        placeholder="Address"
                        value=""   
                        />
                    </div>
                    </div>
                </div>
                <div className="row-member-data">
                    <div className="container-member-text">
                        <span className="member-text">Email</span>
                    </div>
                    <div>
                     <div className="container-input-member">
                        <Input
                        type="email"
                        placeholder="Email"
                        value=""   
                        />
                    </div>
                    </div>
                </div>
                <div className="row-member-data">
                    <div className="container-member-text">
                        <span className="member-text">Phone</span>
                    </div>
                    <div>
                     <div className="container-input-member">
                        <Input
                        type="text"
                        placeholder="Phone"
                        value=""   
                        />
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
} 


export default MemberArea


