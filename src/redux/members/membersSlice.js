import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  membersInfo: [
    {
      id: 1,
      name: "John Doe",
      email: "",
      phone: "",
      photo: "",
      status: "active",
      address: "",
      city: "",
      dob: "",
      jobArea: "",
      jobType: "",
      jobTitle: "",
      jobDescription: "",
      sex: "",
      landmarks: [],
      roles: [],
      Portfolios: [],
      groups: [],
      ministries: [],
      payments: [],
    },
  ],
};

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    LoadMembersData: (state, action) => {
      state.membersInfo = action.payload;
    },
  },
});

export const { LoadMembersData } = membersSlice.actions;

export default membersSlice.reducer;