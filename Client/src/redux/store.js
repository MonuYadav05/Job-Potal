import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice"; // Import your auth slice reducer

export const store = configureStore({
  reducer: {
    auth: authReducer, // Register the reducer under the 'auth' slice
  },
});
