import * as React from "react";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router-dom"
import {store} from '../store';
import {setAuth} from '../store/actions';
import {StyledLoginDivError, StyledCustomCheckbox, StyledLoginCheckbox, StyledLoginError, StyledLoginInput, StyledLoginForm, StyledLoginSubmit, StyledLoginLabel, StyledLoginDivContainer} from '../../assets/styled-components/login';


function Form() {
    const [passError, setPassError] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const {register, handleSubmit, getValues, formState: {errors}} = useForm({mode: "onChange"});
    const [loginError, setLoginError] = useState(false);
    const [remember, setRemember] = useState(false)
    const PASSWORD = 'password';
    const LOGIN = 'login'
    const navigate = useNavigate();


    const onSubmit = async (data) => {   //post url with data
        if (getValues('login') === LOGIN && getValues('password') !== PASSWORD) {
            setPassError(true)
            setTimeout(() => {
                setIsDisabled(false);
                setPassError(false);
            }, 2000)
        }
        if (getValues('login') === LOGIN && getValues('password') === PASSWORD) {

            store.dispatch(setAuth({auth: 'auth'}))
            localStorage.setItem('name', `${getValues('login')}`)
            localStorage.setItem('auth', 'auth')
            return navigate('/currencies', {state: getValues('login')})
        } else {
            setLoginError(true)
            setTimeout(() => {
                setIsDisabled(false);
                }, 1000);
            setTimeout(() => {
                setLoginError(false);
            }, 2000);
        }
    };



    function rememberUser() {
        if (!remember) {
            localStorage.setItem('auth', 'auth');
            localStorage.setItem('name', `${getValues('login')}`)
            setRemember(!remember);
        } else {
            localStorage.removeItem('auth')
            localStorage.removeItem('name')
            setRemember(!remember)
        }
    }


    return (
        <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
            { <StyledLoginError loginError={loginError}>
                 <span>
                     !
                 </span>
                {`User ${getValues('login')} not exists`}
            </StyledLoginError>}
            {<StyledLoginError loginError={passError}>
                <span>
                    !
                </span>
                {`User ${getValues('login')} has another password`}
            </StyledLoginError>}
            <StyledLoginDivContainer>
                {errors.login && <StyledLoginDivError>{errors.login.message}</StyledLoginDivError>}
                <StyledLoginLabel>Login</StyledLoginLabel>
                <StyledLoginInput
                    error={errors.login}
                    {...register('login', {
                        required: 'Field is required',
                    })}
                />
            </StyledLoginDivContainer>
            <StyledLoginDivContainer>
                <StyledLoginLabel>Password</StyledLoginLabel>
                <StyledLoginInput error={passError}
                       {...register('password')}
                       type={'password'}/>
            </StyledLoginDivContainer>

            <StyledLoginCheckbox>
                <StyledCustomCheckbox onChange={rememberUser} id={'checkbox'}  type={'checkbox'}/>
                <StyledLoginLabel
                htmlFor={'checkbox'}
                >
                    Remember me

                </StyledLoginLabel>
            </StyledLoginCheckbox>
            <StyledLoginSubmit type={'submit'} value={'Login'} disabled={isDisabled}/>
        </StyledLoginForm>
    );
}

export default Form
