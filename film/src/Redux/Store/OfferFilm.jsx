import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addFilmOffers = createAsyncThunk('offerFilms/addFilmOffer',
    async (url) => {
        return fetch (url)
            .then(res => res.json())
            .then(data => data)
    }
)

const offerFilms = createSlice({
    name: 'offerFilms',
    initialState: [],
    reducers: {},
    extraReducers: builder => {
        builder.addCase(addFilmOffers.fulfilled, ((state, action) => {
            state.push(...action.payload.data)
        }))
    }
})

export default offerFilms.reducer