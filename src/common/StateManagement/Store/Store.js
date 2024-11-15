import {configureStore} from '@reduxjs/toolkit';
import UserDetailsReducers from '../UserDetailsSlice';

export const store = configureStore({
    reducer:{
        UserDetails:UserDetailsReducers,
    }
})