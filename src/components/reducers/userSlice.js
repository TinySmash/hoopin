import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loginInfo: {
      isConnected: false,
      userId: null,
      fullName: " ",
      username: "",
      email: "",
      password: "",
    },
    balance: 0,
    cart: [],
    history: [],
  },
  reducers: {
    SignUp(state, action) {
      state.loginInfo = action.payload;
    },
    Login(state, action) {},
    Logout(state, action) {},
    // getUserLoginData(state) {
    //   return state.loginInfo;
    // },
  },
});

export const { SignUp, Login, Logout, getUserById } = userSlice.actions;
export const userReducer = userSlice.reducer;
