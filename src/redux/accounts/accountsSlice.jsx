import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [],
};

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {},
});

export default accountsSlice.reducer;