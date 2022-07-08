import Clock from "../clock/clock.js";
import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux';
import {store} from '../store';
import {setAuth} from '../store/actions';
import {StyledHeaderUl, StyledHeaderDivClock, StyledHeaderDivTitle, StyledHeaderSpan, StyledHeaderDiv} from '../../assets/styled-components/header';



const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const login = useSelector(state => state.reducer.setAuth)
    const storageLogin = localStorage.getItem('auth');
    const storageName = localStorage.getItem('name');

    function loginName() {
        if (storageLogin !== 'auth' && login.auth !== 'auth') {
            return 'Login'
        } else return 'Logout'
    }

    function loginClick() {
        if (login.auth === 'auth' || storageLogin === 'auth') {
            localStorage.removeItem('auth');
            localStorage.removeItem('name');
            store.dispatch(setAuth({auth: 'noAuth'}));
            navigate('/');

        } else {
            navigate('/login')
        }
    }

    const checkName = function () {
        if (storageName !== '') {
            return storageName
        } else return location.state
    }

    function checkLogin() {
        if (storageName === '') return login.auth
        if (login.auth !== '') return storageName

    }

    return (<StyledHeaderDiv>
        <StyledHeaderDivTitle>
            <Link to={'/'}>
                <h1>Currencies eXchange</h1>
            </Link>
            Google not actual
        </StyledHeaderDivTitle>
        <StyledHeaderUl>
            <li>
                <Link to={'/about'}>About me</Link>
            </li>
            <li>
                <Link to={'/currencies'}>Take a look inside</Link>
            </li>
        </StyledHeaderUl>

        <StyledHeaderDivClock>
            <Clock/>
            <span style={{marginBottom: '5px'}}>
                Moscow
                </span>
            {checkLogin() && <StyledHeaderSpan> Greetings {checkName()} </StyledHeaderSpan>}
            <button onClick={loginClick}>
                {loginName()}
            </button>
        </StyledHeaderDivClock>
    </StyledHeaderDiv>);
};

export default Header;


