import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchCategories = createAsyncThunk('category/fetchCategories', async () => {
    const response = await axios.get('http://localhost:8080/categories/')
    return response.data
})


const initialState = {
    categories: [],
}

const categorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state, action) => {
            console.log("Loding...")
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            console.log("Something went wrong")
        })
    }
})

export default categorySlice.reducer
export const getAllCategories = (state) => state.category.categories