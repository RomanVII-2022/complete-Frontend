import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../features/category/categorySlice'
import blogReducer from '../features/blog/blogSlice'


export const store = configureStore({
    reducer: {
        category: categoryReducer,
        blog: blogReducer,
    }
})