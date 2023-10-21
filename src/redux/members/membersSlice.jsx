import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMembersData = createAsyncThunk('members/fetchMembersData', async () => {
  // fetch data from localhost/api/v1/members
  const response = await fetch('http://localhost:3000/api/v1/members');
  const data = await response.json();
  console.log(data);
  return data;
});

// post new member data
export const postMemberData = createAsyncThunk('members/postMemberData', async (memberData) => {
  const response = await fetch('http://localhost:3000/api/v1/members/new',{
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(memberData)
  });
  const data = await response.json();
  console.log(data);
  return data;
})

const initialState = {
  membersInfo: [],
};

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    updateMemberData: (state, action) => {
      state.membersInfo.push(action.payload);
    },
  },
  extraReducers: {
    [fetchMembersData.fulfilled]: (state, action) => {
      state.membersInfo = action.payload.data;
    },
  },
});

export const { updateMemberData } = membersSlice.actions;
export default membersSlice.reducer;