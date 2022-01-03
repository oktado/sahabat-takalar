import {useState} from 'react'
import {Row,Col} from 'antd';
import Select from 'react-select'
import Input from "../../common/Input";
import { useForm } from "../../common/utils/useForm";
import {useHistory} from 'react-router-dom'
import ProfilePicture from "../../common/ProfilePicture";
import validate from "../../common/utils/validationRules";
import {  ValidationTypeProps } from "../../components/ContactForm/types";
import { Label } from "../../common/TextArea/styles";
import './index.css'

interface LoginProps {
    props : any 
}

const Login = (props : LoginProps) => {
    const history = useHistory();

    const [registerType,setRegisterType] = useState("")
    const [isHoverToggle,setIsHoverToggle] = useState("")
    const [isActiveToggle,setIsActiveToggle] = useState("")

    const { values, errors, handleChange, handleSubmit } = useForm(
        validate
      ) as any;

      const optionsRegister = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'chocolate1', label: 'Chocolate1' },
        { value: 'strawberry1', label: 'Strawberry1' },
        { value: 'vanilla1', label: 'Vanilla1' }
      ]

      const ToggleOptions = ['Personal','Community']

      const customStyles = {
        option: (provided, {isSelected,isFocused}) => ({
          ...provided,
          color: '#191b1e',
          background: isFocused || isSelected ? "#e4e6ea" : "",
          left:'100px',
          bottom:'100px'
        }),
        control: (provided) => ({
          ...provided,
          color:  provided.isSelected || provided.isHover ?"#191b1e" :"",
          backgroundColor:'#191b1e',
          border: provided.isFocused || provided.isSelected ? "1px solid #191b1e" : "1px solid #191b1e",
          boxShadow: "inset 6px 6px 12px #121315,inset -6px -6px 12px #212327",
          height: "58px",
          borderRadius: "10px",
          width: '100%'
        }),
        singleValue: (provided, state) => {
        
            return { ...provided, color: '#e4e6ea',border:"#191b1e" };
          }
      }

  return (
    <div className="container-login-page">
       <div className="content-login-page">
           <div className="container-picture">
            <ProfilePicture pathname='/' src={'img/svg/takalar-logo.png'}/>
           </div>
            <div className='container-form-login' >
            {props.location.pathname === "/login" ?  <div>
            <Input
                type="text"
                name="Username"
                placeholder="Username"
                value={values.username || ""}
                onChange={handleChange}      
            />
            
            <Input
                type="password"
                name="Password"
                placeholder="Password"
                value={values.password || ""}
                onChange={handleChange}      
            />
            </div>:
            <div>
            <Row>
                <span style={{color:"#e4e6ea"}}>Register as</span>
            </Row>
            <Row className='container-btn-toggle-register'>
               {ToggleOptions.map((type, index) => {
                   return(
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <div key={index} className={`${isHoverToggle === type || isActiveToggle === type ? "btn-toggle-register-active" : "btn-toggle-register"}`} onMouseEnter={()=>setIsHoverToggle(type)} onMouseLeave={() => setIsHoverToggle("")} onClick={()=>setIsActiveToggle(type)}>
                            <span className={`${isHoverToggle === type || isActiveToggle === type ? "title-btn-register-toggle-hover" : "title-btn-register-toggle"}`}>{type}</span>
                         </div>
                    </Col>
                   )
               })}
            </Row>
            <Row>
                <Col xl={12} lg={12} md={12} sm={24}>
                    <Input
                    type="text"
                    name="Username"
                    placeholder="Username"
                    value={values.Username || ""}
                    onChange={handleChange}      
                    />
                </Col>
                <Col xl={12} lg={12} md={12} sm={24}>
                    <Input
                    type="password"
                    name="Password"
                    placeholder="Password"
                    value={values.password || ""}
                    onChange={handleChange}      
                    />
                </Col>
            </Row>
            <Row>
                <Col xl={12} lg={12} md={12} sm={24}>
                    <Input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    value={values.email || ""}
                    onChange={handleChange}      
                    />
                </Col>
                <Col xl={12} lg={12} md={12} sm={24}>
                    <Input
                    type="text"
                    name="Address"
                    placeholder="Address"
                    value={values.address || ""}
                    onChange={handleChange}      
                    />
                </Col>
            </Row>
            <Row>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <div className='container-select'>
                        <Label>Type</Label>
                        <Select
                        options={optionsRegister} 
                        styles={customStyles}
                        menuPlacement="auto"
                        />
                    </div>
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <Input
                    type="text"
                    name="Address"
                    placeholder="Address"
                    value={values.address || ""}
                    onChange={handleChange}      
                    />
                </Col>
            </Row>
            
            </div>}
            <div className="container-btn-login">
                <div className='btn-submit-login'>{props.location.pathname === "/login" ? "LOGIN" : "SUBMIT"}</div>
            </div>
            <span className="create-acount-text" onClick={() => history.push(props.location.pathname === "/login" ? "/register" : "/login")}>{props.location.pathname === "/login" ? "Create Account" : "Already have account?"}</span>
        </div>
       </div>
    </div>
  );
};

export default Login;