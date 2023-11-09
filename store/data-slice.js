import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    theData: [],
  },
  reducers: {
    formData(state, action) {
      state.theData.push(action.payload);
      console.log(state.theData);
    },
  },
});
export const dataActions = dataSlice.actions;
export default dataSlice;
