import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [],
};

const ministriesSlice = createSlice({
  name: "ministries",
  initialState,
  reducers: {},
});

export default ministriesSlice.reducer;