import React from 'react';
import {useSelector} from 'react-redux';


const Module = (props) => {

    const initialCurrency = useSelector(state => state.reducer.initialValute)

    const checkPercents = function () {
        const today = props.props.Value;
        const yesterday = props.props.Previous;
        let ratioA = (yesterday/initialCurrency.previous - today/initialCurrency.value)*100;

        if (initialCurrency.charCode === 'RUB') {
            ratioA = today - yesterday
        }
        if (ratioA > 0) return <td style={{color: "green"}}> ▲ +{ratioA.toFixed(2)}</td>
        if (ratioA < 0) return <td style={{color: "red"}}> ▼ {ratioA.toFixed(2)}</td>
    }
    return (
        <>
            <tr>
                <td>{props.props.CharCode}</td>
                <td aria-disabled={"true"}>{props.props.Nominal}</td>
                <td>{props.props.Name}</td>
                <td aria-disabled={"true"}>{(props.props.Value / initialCurrency.value).toFixed(2)}</td>
                {checkPercents()}
            </tr>
        </>
    );
};

export default Module;
