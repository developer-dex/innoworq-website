import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import HomeService from "../../services/homeService";

// Async thunk to handle home list API call
export const homeList = createAsyncThunk("home/list", async (data) => {
    const res = await HomeService.getHomeList(data);
    return res?.data;
});

// Initial state for the home slice
const initialState = {
    homeResponse: [{}],
    isLoading: false
};

const homeSlice = createSlice({
    name: "driver",
    initialState: initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(homeList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(homeList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.homeResponse = action.payload;
            })
            .addCase(homeList.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export default homeSlice.reducer;
