import {configureStore} from "@reduxjs/toolkit";
import coinReducer from './CoinSlice'

const Store = configureStore({
reducer:{
    coins:coinReducer,
}
})
export default Store;