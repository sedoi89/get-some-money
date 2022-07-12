import React from 'react';
import {store} from "../store";
import {setChangedValute} from "../store/actions";
import {useSelector} from "react-redux";
import {StyledCurrencySelect} from '../../assets/styled-components/currency'

const XchangeModule = (props) => {

    let name = props.props;

    const allCurrencies = useSelector(state => state.reducer.arrayValutes)


    const setInitialValute = function (evt) {
        allCurrencies.map(item => {
            if (item[1].CharCode === evt.target.value) {

                store.dispatch(setChangedValute({
                    name: item[1].Name,
                    value: item[1].Value.toFixed(2),
                    nominal: item[1].Nominal,
                    charCode: item[1].CharCode,
                    previous: item[1].Previous

                }))
            }
            if (evt.target.value === 'RUB') {
                store.dispatch(setChangedValute({
                    name: 'Российские рубли',
                    value: 1,
                    nominal: 1,
                    charCode: 'RUB',
                    previous: 1,
                }))
            }
            return item;
        })

    }


    return (
        <StyledCurrencySelect
            onChange={setInitialValute}
            value={name}
            align={true}
        >
            <option value={'RUB'}>Российские рубли</option>
            {allCurrencies.map(item =>
                <option
                    value={item[1].CharCode}
                    key={item[1].ID}
                >
                    {item[1].Name}
                </option>
            )}

        </StyledCurrencySelect>
    );
};

export default XchangeModule;
