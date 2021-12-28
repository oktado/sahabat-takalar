import Input from "../../common/Input";
import { useForm } from "../../common/utils/useForm";
import ProfilePicture from "../../common/ProfilePicture";
import validate from "../../common/utils/validationRules";
import {Button} from '../../common/Button/index'
import { Span } from "../../components/ContactForm/styles";
import {  ValidationTypeProps } from "../../components/ContactForm/types";
import './index.css'




const Login = () => {
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
            <div className="container-btn-login">
                <Button>LOGIN</Button>
            </div>
        </div>
       </div>
    </div>
  );
};

export default Login;