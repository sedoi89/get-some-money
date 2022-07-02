import '../../App.css';
import Header from '../header/header.jsx';
import Currency from "../currency/currency";
import {axiosValutes} from "../store/api-actions";



function App() {
    axiosValutes()
    return (
        <>
            <Header/>

            <Currency/>
        </>

    );
}

export default App;
