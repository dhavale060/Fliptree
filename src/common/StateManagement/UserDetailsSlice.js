import {createSlice} from '@reduxjs/toolkit';

const UserDetailsSlice = createSlice({
    name:"ItemsDetails",
    initialState:{
        UserData:{},
    },
    reducers:{
        addUserData(state , action){
            state.UserData = action.payload
        },
    },
    // extraReducers:{

    // }
})

export const {addUserData} = UserDetailsSlice.actions;
export default UserDetailsSlice.reducer;