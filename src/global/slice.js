import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
  name: 'kindraise',
  initialState: {
    user: {},
    allCampaigns: [],
    myCampaigns: [],
    token: '',
    role:''
  },
  reducers:{
    addUser: (state, {payload})=>{
      state.user = payload
    },
    userToken: (state, {payload})=>{
      state.token = payload
    },
    userRole: (state, {payload})=>{
      state.role = payload
    },
    allCampaigns: (state, {payload})=>{
      state.allCampaigns = payload
    },
    myCampaigns: (state, {payload})=>{
      state.myCampaigns = payload
    }
  }
});
export const { allCampaigns, addUser, myCampaigns, userToken,userRole} = appSlice.actions;
export default appSlice.reducer;