import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addNewFilms = createAsyncThunk('NewFilms/addNewFilms',
    async (url) => {
        return fetch(url)
            .then(res => res.json())
            .then(data => data)
    }
)

const newFilms = createSlice({
    name: 'NewFilms',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addNewFilms.fulfilled, ((state, action) => {
            state.push(...action.payload.data)
        }))
    }
})

export default newFilms.reducer