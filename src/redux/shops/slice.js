import { createSlice } from '@reduxjs/toolkit';

import { fetchAllShops, fetchDrugs } from './operations';

const initialState = {
 items: [],
 drugsList: [],
 loading: false,
 error: null,
};

const shopsSlice = createSlice({
 name: 'shops',
 initialState,
 extraReducers: builder => {
  builder
   .addCase(fetchAllShops.pending, store => {
    store.loading = true;
   })
   .addCase(fetchAllShops.fulfilled, (store, { payload }) => {
    store.loading = false;
    store.items = payload;
   })
   .addCase(fetchAllShops.rejected, (store, { payload }) => {
    store.loading = false;
    store.error = payload;
   })
   .addCase(fetchDrugs.pending, store => {
    store.loading = true;
   })
   .addCase(fetchDrugs.fulfilled, (store, { payload }) => {
    store.loading = false;
    store.drugsList = payload;
   })
   .addCase(fetchDrugs.rejected, (store, { payload }) => {
    store.loading = false;
    store.error = payload;
   });
 },
});

export default shopsSlice.reducer;
