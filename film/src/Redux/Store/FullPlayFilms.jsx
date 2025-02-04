import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addFullPlayFilms = createAsyncThunk('fullPlayFilms/addFullPlayFilms',
    async (url) => {
        return fetch(url)
        .then(res => res.json())
        .then(data => data)
    }
)

const fullPlayFilms = createSlice({
    name: 'fullPlayFilms',
    initialState: [],
    reducers: {},
    extraReducers: builder => {
        builder.addCase(addFullPlayFilms.fulfilled, (state, action) => {
            state.push(...action.payload.data)
        })
    }
})

export default fullPlayFilms.reducer