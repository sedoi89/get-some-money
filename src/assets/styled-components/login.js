import styled from "styled-components";

export const StyledLoginForm = styled.form`
  width: 100%;
  margin: 30px;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const StyledLoginError = styled.div`

  display: flex;
  align-items: center;

  width: 35%;
  height: 60px;
  position: absolute;
  top: ${(props) => props.loginError === true ? '293px' : '421px'};
  background-color: #F5E9E9;
  border: 1px solid #E26F6F;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  opacity: ${(props) => props.loginError === true ? '1' : '0'};
  transition: 1s;

  @media (max-width: 793px) {
    width: 55%;
    top: ${(props) => props.loginError === true ? '375px' : '492px'}
  }

  & span {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #ffC8C8;
    border-radius: 50%;
    text-align: center;
    margin-right: 14px;
    margin-left: 30px;
    color: #EE6565;
    line-height: 20px;
  }
`
export const StyledLoginDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;

  & label {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
  }
`

export const StyledLoginDivError = styled.div`
  position: absolute;
  top: 380px;
  font-size: 14px;
  color: #E26F6F;
  
  @media (max-width: 793px) {
    top: 445px
  }
`
export const StyledLoginLabel = styled.label`
  margin-bottom: 74px;
  position: relative;
`

export const StyledLoginInput = styled.input`
  
  min-width: 100%;
  height: 60px;
  background-color: #F5F5F5;
  border: none;
  margin-bottom: 20px;
  position: relative;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 400;
  outline: ${(props)=> props.error ? '1px solid #E26F6F' : ''} ;
  border-radius: ${(props)=> props.error ?  '8px' : ''} ;
  
  &:focus {
    border: none;
    outline: none;
  }
`

export const StyledLoginSubmit = styled.input`
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  border: none;
  background-color: rgb(29%, 40%, 100%, 0.7);
  box-shadow: -8px -7px 60px -12px rgb(29, 40, 100, 0.3);
  border-radius: 8px;
  min-width: 35%;
  height: 60px;
  
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    background-color: #99A9FF;
  }
`

export const StyledLoginCheckbox = styled.div`
  display: flex;
  padding-left: 3px;
  margin-bottom: 40px;
  padding-right: 70px;
  
`

export const StyledCustomCheckbox = styled.input`
  position: absolute;

  opacity: 0;
  
  & input {
    width: 20px;
    height: 20px;
    margin-right: 17px;
    cursor: pointer;
  }
  
  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
  }

  & + label::before{
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    flex-grow: 0;
    background-color: white;
    outline: 1px solid black;
    outline-offset: 3px;
    margin-right: 14px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    border-radius: 2px;
  }
  
  &:checked + label::before {
    outline-offset: 3px;
    background-color: #4A67FF;
    background-size: 16px;
    border-radius: 2px;
  }
`
