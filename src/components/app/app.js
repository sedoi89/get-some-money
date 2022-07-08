import '../../assets/css/App.css';
import Header from '../header/header.jsx';
import Currency from "../currency/currency";
import {axiosValutes} from "../store/api-actions";
import { Routes, Route, Navigate, HashRouter} from "react-router-dom";
import About from "../About/about";
import PrivateRoute from "../privat-route/private-route";
import Login from "../login/login";
import Main from '../main/main';

axiosValutes()

function App() {


    return (

        <HashRouter>
            <Header/>
            <Routes>
                <Route exact path={'/'} element={<Main/>}/>
                <Route exact path={'/about'} element={<About/>}/>
                <Route exact path={'/login'} element={<Login/>}/>
                <Route exact path={'/currencies'} element={
                    <PrivateRoute
                        authorizationStatus={'auth'}
                    >
                        <Currency/>
                    </PrivateRoute>}/>
                <Route exact path={'*'} element={<Navigate replace to='/'/>} />

            </Routes>
        </HashRouter>

    );
}

export default App;
