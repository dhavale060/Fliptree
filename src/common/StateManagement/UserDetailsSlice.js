import {createSlice} from '@reduxjs/toolkit';

const UserDetailsSlice = createSlice({
    name:"ItemsDetails",
    initialState:{
        userData:[],
        isLoggedIn:false,
    },
    reducers:{
        addUserData(state , action){
            state.userData = [...state.userData, action.payload];
        },
        login(state){
            state.isLoggedIn = true; // Set login state to true
        },
        logout(state){
            state.isLoggedIn = false; // Set login state to false
        },
    },
    // extraReducers:{

    // }
})

export const {addUserData, login , logout} = UserDetailsSlice.actions;
export default UserDetailsSlice.reducer;