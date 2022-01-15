import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    
    const response = await axios.get("http://80.208.225.82:8088/api/users");
   
        return response.data;
});


const usersSlice = createSlice({

    name: 'users',

    initialState: { usersArray:[] },
   
    extraReducers: (builder) => {
          // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
        // Add user to the state array
        state.usersArray.push(...action.payload)
      })
    },
});

export default usersSlice.reducer;