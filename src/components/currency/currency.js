import React, {useState} from 'react';
import Module from "./module";
import {useSelector} from "react-redux";
import Xchange from '../xchange/xchnge'
import {store} from "../store";
import {setValute} from "../store/actions";
import '../../assets/css/App.css'
import {
    StyledCurrencySelect,
    StyledCurrencyTableContainer,
    StyledCurrencyTable
} from '../../assets/styled-components/currency';


const Currency = () => {


    const currencies = useSelector(state => state.reducer.Valutes);
    const [prop, setProp] = useState(false)
    const currenciesArray = Object.entries(currencies);
    const [select, setSelect] = useState('Default');

    function sort() {
        if (select === 'High to Low') {
            currenciesArray.sort((a, b) => b[1].Value / b[1].Nominal - a[1].Value / a[1].Nominal)
        }
        if (select === 'Low to High') {
            currenciesArray.sort((a, b) => a[1].Value / a[1].Nominal - b[1].Value / b[1].Nominal)

        }
        return currenciesArray
    }

    const onChangeHandle = function (event) {
        setSelect(event.target.value);
    };
    sort();


    const onClickHandle = function (evt) {
        currenciesArray.map((item) => {
            if (item[1].Name === evt.target.textContent) {

                store.dispatch(setValute({
                    nominal: item[1].Nominal,
                    value: item[1].Value.toFixed(2),
                    name: item[1].Name,
                    charCode: item[1].CharCode,
                    previous: item[1].Previous.toFixed(2)
                }))
                setProp(!prop);

            }
            return item;
        })
    }


    return (
        <>

            <Xchange props={prop}/>
            <StyledCurrencyTableContainer>
                <StyledCurrencySelect value={select.value} onChange={onChangeHandle}>
                    <option value={'Default'}>Без сортировки</option>
                    <option value={'High to Low'}>По убыванию стоимости</option>
                    <option value={'Low to High'}>По возрастанию стоимости</option>

                </StyledCurrencySelect>
                <StyledCurrencyTable onClick={onClickHandle}>
                    <tbody>
                    <tr>
                        <td>Код</td>
                        <td>Единиц</td>
                        <td>Валюта</td>
                        <td>Курс</td>
                        <td>Изменение за 24 часа</td>
                    </tr>
                    {currenciesArray.map(i =>
                        <Module
                            props={i[1]}
                            key={i[1].ID}

                        />
                    )}

                    </tbody>
                </StyledCurrencyTable>
            </StyledCurrencyTableContainer>
        </>
    );
};

export default Currency;
