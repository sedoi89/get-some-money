import {setArray, setValute, setChangedValute, setAuth} from "./actions";


const {createReducer} = require("@reduxjs/toolkit");
const {getValutes} = require("./actions");

export const initialState = {
    Valutes: [],

    arrayValutes: [],

    setValute: {


    },
    initialValute: {
        name: 'Российские рубли',
        nominal: 1,
        value: 1,
        charCode: 'RUB'
    },


    setAuth: {
        auth: 'unknown'
    }

}

export const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getValutes, (state, action) => {
            state.Valutes = action.payload
        })
        .addCase(setValute, (state, action) => {
            state.setValute = action.payload
        })
        .addCase(setArray, (state, action) => {
            state.arrayValutes = action.payload
        })
        .addCase(setChangedValute, (state, action) => {
            state.initialValute = action.payload
        })
        .addCase(setAuth, (state, action)=> {
            state.setAuth = action.payload
        })
})

export default {reducer}
