import {createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data; // Return the fetched data
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );