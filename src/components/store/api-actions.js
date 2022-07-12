import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {store} from "./index";
import {getValutes, setArray, setValute} from "./actions";


export const axiosValutes = createAsyncThunk('axios/getValutes',
    async () => {
        try {

            const {data} = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
            const currenciesArray = Object.entries(data.Valute)
            store.dispatch(getValutes(data.Valute))
            store.dispatch(setValute({
                name: data.Valute.USD.Name,
                value: data.Valute.USD.Value.toFixed(2),
                nominal: data.Valute.USD.Nominal,
                charCode: data.Valute.USD.CharCode,
                previous: data.Valute.USD.Previous
            }))

            store.dispatch(setArray(currenciesArray))


        } catch (error) {
            console.log(error)
        }
    }
)
