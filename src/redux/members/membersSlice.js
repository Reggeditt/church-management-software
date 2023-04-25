import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [],
};

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {},
});

export default membersSlice.reducer;