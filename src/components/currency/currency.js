import React, {useEffect, useState} from 'react';
import Module from "./module";
import {useSelector} from "react-redux";
import Xchange from '../xchange/xchnge'

const Currency = () => {

    const currencies = useSelector((state) => state.reducer.Valutes);

    let currenciesArray = Object.entries(currencies);
    const [select, setSelect] = useState('Default');

    const [changeValute, setChangeValute] = useState({name: 'Рубль', nominal: 1, value: 1})

    const [getValute, setGetValute] = useState({name: 'Доллар США', nominal: '', value: ''})

    useEffect(() => {currenciesArray.map(item => {if (item[1].CharCode === 'USD') {
        setGetValute({name: item[1].Name, nominal: item[1].Nominal, value: item[1].Value.toFixed(2)})
    }})},[])



    console.log(currenciesArray)


    function sort() {


        if (select === 'High to Low') {
            currenciesArray.sort((a, b) => b[1].Value - a[1].Value)
        }
        if (select === 'Low to High') {
            currenciesArray.sort((a, b) => a[1].Value - b[1].Value)
        }


    };


    const onChangeHandle = function (event) {

        setSelect(event.target.value);

    };
    sort();




    const onClickHandle = function (evt) {
        evt.preventDefault();


        currenciesArray.map(item => {
            if (item[1].Name === evt.target.textContent) {
                setGetValute({ nominal: item[1].Nominal, value: item[1].Value.toFixed(2), name: evt.target.textContent})


            }
        })

    }
    console.log(getValute)


    return (
        <>
            <Xchange props={[changeValute, getValute]}/>
            <select value={select.value} onChange={onChangeHandle}>
                <option disabled={true} value={'Default'}>Default</option>
                <option value={'High to Low'}>По убыванию стоимости</option>
                <option value={'Low to High'}>По возрастанию стоимости</option>

            </select>
            <table onClick={onClickHandle}>
                <tbody>
                <tr>
                    <td>Код</td>
                    <td>Единиц</td>
                    <td>Валюта</td>
                    <td>Курс</td>
                    <td></td>
                    <td>Изменение за 24 часа</td>
                </tr>
                {currenciesArray.map(i =>
                    <Module
                        props={i[1]}
                        key={i[1].ID}
                    />
                )}

                </tbody>
            </table>
        </>
    );
};

export default Currency;
