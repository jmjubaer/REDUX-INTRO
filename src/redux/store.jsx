import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/CounterSlice'
// import logger from "redux-logger";
import Logger from "./middlewares/Logger";
const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger)
})
export default store;