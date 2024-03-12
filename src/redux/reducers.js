import { combineReducers } from '@reduxjs/toolkit';

import shopsReducer from './shops/slice';
import cartReducer from './cart/slice';
import favoriteReducer from './favorite/slice';

const rootReducer = combineReducers({
 shops: shopsReducer,
 cart: cartReducer,
 favorite: favoriteReducer,
});

export default rootReducer;
