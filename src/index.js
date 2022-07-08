import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import {ToastContainer} from 'react-toastify';
import {store} from '../src/components/store/index';
import {Provider} from 'react-redux';
import {axiosValutes} from "./components/store/api-actions";


const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(axiosValutes())
root.render(

        <Provider store={store}>
            <ToastContainer/>
            <App/>
        </Provider>

);

