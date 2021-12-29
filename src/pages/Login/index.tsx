import {useState,useEffect} from 'react'
import {Row,Col} from 'antd';
import Select from 'react-select'
import Input from "../../common/Input";
import { useForm } from "../../common/utils/useForm";
import {useHistory,useParams} from 'react-router-dom'
import ProfilePicture from "../../common/ProfilePicture";
import validate from "../../common/utils/validationRules";
import {Button} from '../../common/Button/index'
import { Span } from "../../components/ContactForm/styles";
import {  ValidationTypeProps } from "../../components/ContactForm/types";
import { Label } from "../../common/TextArea/styles";
import {Container} from '../../common/Input/styles'
import './index.css'

interface LoginProps {
    props : any 
}

const Login = (props : LoginProps) => {
    const history = useHistory();

    const [registerType,setRegisterType] = useState("")
    const typeRegister = ["Personal","Community"]

    const { values, errors, handleChange, handleSubmit } = useForm(
        validate
      ) as any;

      const ValidationType = ({ type }: ValidationTypeProps) => {
        const ErrorMessage = errors[type];
        return (
            <Span erros={errors[type]}>{ErrorMessage}</Span>
        );
      };

      const optionsRegister = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'chocolate1', label: 'Chocolate1' },
        { value: 'strawberry1', label: 'Strawberry1' },
        { value: 'vanilla1', label: 'Vanilla1' }
      ]


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
            <ProfilePicture src={'img/svg/professional-man.jpg'}/>
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
            <ValidationType type="username" />
            <Input
                type="password"
                name="Password"
                placeholder="Password"
                value={values.password || ""}
                onChange={handleChange}      
            />
            <ValidationType type="password" />
            </div>:<div>
                 <Row>
                <span>Register as</span>
            </Row>
            <Row>
               {typeRegister.map((type, index) => {
                   return(
                    <Col key={index} xl={3} lg={3} md={6} sm={6} xs={9}>
                        <span className='register-type' style={{color: registerType === type ? "#ff0606" : "#c4cfde"}} onClick={() => setRegisterType(type)}>{type}</span>
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
                <Button>{props.location.pathname === "/login" ? "LOGIN" : "SUBMIT"}</Button>
            </div>
            <span className="create-acount-text" onClick={() => history.push(props.location.pathname === "/login" ? "/register" : "/login")}>{props.location.pathname === "/login" ? "Create Account" : "Already have account?"}</span>
        </div>
       </div>
    </div>
  );
};

export default Login;