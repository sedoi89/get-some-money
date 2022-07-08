import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";


import styled from 'styled-components';
const Loginerror = styled.div`
margin-left: 30px;
`



function PrivateRoute (props) {

    const AuthorizationStatus = useSelector(state => state.reducer.setAuth)

    const {authorizationStatus, children} = props
    return (
        localStorage.getItem('auth') === authorizationStatus || authorizationStatus === AuthorizationStatus.auth
        ? children
            : <Loginerror> Oops, you need to <Link className={'login-link'} to={'/login'}>Login</Link>  first </Loginerror>
    );
}

export default PrivateRoute;


