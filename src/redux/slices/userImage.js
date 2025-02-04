import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
  name: "userImage",
  initialState: { url: "" },
  reducers: {
    setImage: (state, action) => {
      return action.payload;
    },
  },
});

export const { setImage } = imageSlice.actions;
export default imageSlice.reducer;
