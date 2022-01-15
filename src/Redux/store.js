import { configureStore } from "@reduxjs/toolkit";
import usersSlice from './reducer';


export default configureStore({
    reducer: {
        users: usersSlice,
    }
})