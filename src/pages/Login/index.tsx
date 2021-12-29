import {useState,useEffect} from 'react'
import {Row,Col} from 'antd';
import Input from "../../common/Input";
import { useForm } from "../../common/utils/useForm";
import {useHistory,useParams} from 'react-router-dom'
import ProfilePicture from "../../common/ProfilePicture";
import validate from "../../common/utils/validationRules";
import {Button} from '../../common/Button/index'
import { Span } from "../../components/ContactForm/styles";
import {  ValidationTypeProps } from "../../components/ContactForm/types";
import './index.css'

interface LoginProps {
    props : any 
}

const Login = (props : LoginProps) => {
    // const history = useHistory();
    // let {route} = useParams()

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
                    <Col key={index} xl={3} lg={3} md={6} sm={6}>
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
            </div>}
            <div className="container-btn-login">
                <Button>{props.location.pathname === "/login" ? "LOGIN" : "SUBMIT"}</Button>
            </div>
            <span className="create-acount-text">{props.location.pathname === "/login" ? "Create Account" : "Already have account?"}</span>
        </div>
       </div>
    </div>
  );
};

export default Login;