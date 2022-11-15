import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  let response = await axios.get("https://dummyjson.com/posts");
  return response.data;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    increment: (state) => {},
    decrement: (state) => {},
    incrementByAmount: (state, action) => {},
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = postsSlice.actions;

export default postsSlice.reducer;
export const selectAllPosts = (state) => state.posts.posts;
