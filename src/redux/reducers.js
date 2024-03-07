import { combineReducers } from "@reduxjs/toolkit";

import shopsReducer from "./shops/slice";
import cartReducer from "./cart/slice";

const rootReducer = combineReducers({
    shops: shopsReducer,
    cart: cartReducer,
})

export default rootReducer;
