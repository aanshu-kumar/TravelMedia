import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk(
    "post/fetchPost",
    async () => {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await res.json();
        return data;
    }
);

const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.posts = action.payload;
            })
            .addCase(fetchPost.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default postSlice.reducer;
