import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Post } from "../../types/Post";
import getMEX from "../../utils/getMEX";

export type sortByType = "title" | "id";

interface PostsState {
  posts: Post[];
  search: string;
  sortBy: sortByType;
}

const initialState: PostsState = {
  posts: [],
  search: "",
  sortBy: "id",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSortBy: (state, action: PayloadAction<sortByType>) => {
      state.sortBy = action.payload;
    },
    addPost: (state, action: PayloadAction<Omit<Post, "id">>) => {
      const newID = getMEX(state.posts.map((p) => p.id));
      state.posts.push({ ...action.payload, id: newID });
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const index = state.posts.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) state.posts[index] = action.payload;
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { setPosts, addPost, updatePost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
