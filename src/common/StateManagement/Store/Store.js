import {configureStore} from '@reduxjs/toolkit';
import UserDetailsReducers from '../UserDetailsSlice';
import ProductDetailsReducer from '../ProductSlice';

export const store = configureStore({
    reducer:{
        UserDetails:UserDetailsReducers,
        ProductDetails:ProductDetailsReducer
    }
})