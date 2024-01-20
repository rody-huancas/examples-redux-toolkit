import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "0",
    title: "Redux toolkit",
    content: "Me gusta Redux toolkit",
    date: sub(new Date(), { munutes: 10 }).toISOString(),
    reactions: {
      like: 0,
      unlike: 0,
    },
  },
  {
    id: "1",
    title: "React",
    content: "Me gusta React",
    date: sub(new Date(), { munutes: 5 }).toISOString(),
    reactions: {
      like: 0,
      unlike: 0,
    },
  },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions: {
              like: 0,
              unlike: 0,
            },
          },
        };
      },
    },
    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const { postAdded, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
export const selectAllPosts = (state) => state.posts;
