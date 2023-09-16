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
    Login(state, action) {
      state.loginInfo = {
        ...action.payload,
        username: "tinys_smash_",
        email: "islam.gueniari@gmail.com",
        userId: "0123456789ABCDEF",
        fullName: {
          firstName: "islam",
          lastName: "El Gueniari",
        },
      };
    },
    Logout(state, action) {},
    // getUserLoginData(state) {
    //   return state.loginInfo;
    // },
  },
});

export const { SignUp, Login, Logout, getUserById } = userSlice.actions;
export const userReducer = userSlice.reducer;
