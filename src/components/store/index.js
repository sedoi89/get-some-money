import createApi from "../service/api";
import {configureStore} from "@reduxjs/toolkit";
import reducer from '../store/reducer'


export const api = createApi();
export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: api
            }
        })
})
