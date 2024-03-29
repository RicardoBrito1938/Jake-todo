import { createSlice, nanoid } from "@reduxjs/toolkit";

type Task = {
  id: string;
  name: string;
  done: boolean;
};

type TaskList = Task[];

const initialState: TaskList = [];

export const PostSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    addPost: (state, action) => {
      const newPost: Task = {
        id: nanoid(),
        name: action.payload.post,
        done: false
      };
      state.push(newPost as (typeof state)[number]);
    },

    deletePost: (state, action) => {
      return state.filter((item: Task) => item.id !== action.payload.id);
    },

    taskDone: state => {
      // toggleActive: state => {
      //   // state.done = !state.done;
      // };
    }
  }
});

export const { addPost, deletePost, taskDone } = PostSlice.actions;

export default PostSlice.reducer;
