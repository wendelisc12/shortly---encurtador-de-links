import { configureStore } from "@reduxjs/toolkit";
import LinkReducer from './reducers/Link'
import Api from "../service/api";

const store = configureStore({
    reducer:{
        Link: LinkReducer,
        [Api.reducerPath]: Api.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(Api.middleware)
})

export default store

export type RootReducer = ReturnType<typeof store.getState>