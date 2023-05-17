import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [],
};

const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {},
});

export default groupsSlice.reducer;