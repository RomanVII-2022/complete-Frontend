import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchBlogs = createAsyncThunk('blog/fetchBlogs', async () => {
    const response = await axios.get('http://localhost:8080/blogs/')
    return response.data
})


export const postBlog = createAsyncThunk('blog/postBlog', async (blog) => {
    const response = await axios.post('http://localhost:8080/blogs/', blog)
    return response.data
})


const initialState = {
    blogs: []
}

const blogSlice = createSlice({
    name: 'blog',
    initialState:initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchBlogs.pending, (state, action) => {
            console.log("Loading...")
        })
        builder.addCase(fetchBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload
        })
        builder.addCase(fetchBlogs.rejected, (state, action) => {
            console.log("Something went wrong")
        })
        builder.addCase(postBlog.pending, (state, action) => {
            console.log('Loading')
        })
        builder.addCase(postBlog.fulfilled, (state, action) => {
            console.log("Successfull")
        })
        builder.addCase(postBlog.rejected, (state, action) => {
            console.log("Something went wrong while adding blog")
        })
    }
})

export default blogSlice.reducer
export const getAllBlogs = (state) => state.blog.blogs