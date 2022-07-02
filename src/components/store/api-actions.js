import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {store} from "./index";
import {getValutes} from "./actions";

export const axiosValutes = createAsyncThunk('axios/getValutes',
    async () => {
    try {
        const {data} = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
        store.dispatch(getValutes(data.Valute))
    }
    catch (error) {
    console.log(error)
}
    }
    )
