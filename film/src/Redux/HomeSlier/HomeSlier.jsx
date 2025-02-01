import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addTodoListAdd = createAsyncThunk(
    'HomeSlider.addTodoList',
    async (url) => {

        return fetch (url)
        .then(res => res.json())
        .then(data => console.log(data))
    }
)

const homeSlider = createSlice({
    name: 'HomeSlider',
    initialState: [],
    reducers: {},
    extraReducers: (bilder) => {
        bilder.addCase(addTodoListAdd.fulfilled((action , state) => {
            console.log(action,state);
            
        }))
    }
})

export default homeSlider.reducer