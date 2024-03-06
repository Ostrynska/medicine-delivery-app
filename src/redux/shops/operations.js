import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../services/shops-api";

export const fetchAllShops = createAsyncThunk(
    "shops/fetch-shops",
    async(_, thunkAPI) => {
        try {
            const data = await api.getAllShops();
            return data;
        }
        catch({response}) {
            return thunkAPI.rejectWithValue(response.data);
        }
    }
)

export const fetchDrugs = createAsyncThunk(
    "shops/fetch-drugs",
    async(id, thunkAPI) => {
        try {
            const data = await api.getShopById(id);
            return data.drugslist;
        }
        catch({response}) {
            return thunkAPI.rejectWithValue(response.data);
        }
    }
)
