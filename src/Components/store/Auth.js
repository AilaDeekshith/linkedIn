import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated : false,
    user:{}
}

const AuthSlice = createSlice({
    name:'Auth',
    initialState,
    reducers:{
        login(state,action){
            state.user = action.payload;
            state.isAuthenticated = true
        },
        logout(state){
            state.user = {};
            state.isAuthenticated = false
        }
    }
})

export const AuthSliceActions = AuthSlice.actions;
export default AuthSlice.reducer;