import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mails",
  initialState: {
    mails: [],
  },
  reducers: {
    addItemToArray: (state, action) => {
      const newItem = action.payload;
      if (state.mails.includes(newItem) || newItem === "") return;
      state.mails = [...state.mails, newItem];
    },
  },
});

export const { addItemToArray } = mailSlice.actions;
export default mailSlice.reducer;
