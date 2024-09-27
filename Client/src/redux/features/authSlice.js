import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  isLoading: false,
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, action) {
      state.signupData = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setIsLoading, setSignupData, setToken } = authSlice;
export default authSlice.reducer;
