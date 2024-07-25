import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'usersDetails',
    initialState : {
        users : {}
    },
    reducers:{
        getAllUserDetails(state,action){
            state.users = action.payload
        }
    }
})

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;