import '../../assets/css/App.css';
import Header from '../header/header.jsx';
import Currency from "../currency/currency";
import {axiosValutes} from "../store/api-actions";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import About from "../About/about";
import PrivateRoute from "../privat-route/private-route";
import Login from "../login/login";
import Main from '../main/main';

axiosValutes()

function App() {


    return (

        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/currencies'} element={
                    <PrivateRoute
                        authorizationStatus={'auth'}
                    >
                        <Currency/>
                    </PrivateRoute>}/>
                <Route path={'*'} element={<Navigate replace to='/'/>} />

            </Routes>
        </BrowserRouter>

    );
}

export default App;
