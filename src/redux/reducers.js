import { combineReducers } from "@reduxjs/toolkit";
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import shopsReducer from "./shops/slice";
import cartReducer from "./cart/slice";

const rootReducer = combineReducers({
    shops: shopsReducer,
    cart: cartReducer,
})

export default rootReducer;
