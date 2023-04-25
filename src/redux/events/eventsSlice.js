import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [],
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
});

export default eventsSlice.reducer;