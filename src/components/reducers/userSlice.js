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
    savedProducts: {
      cart: [],
      liked: [],
    },
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

    addToCart(state, action) {
      state.savedProducts.cart.push(action.payload);
    },
    removeProductFromCart(state, action) {
      state.savedProducts.cart.splice(
        state.savedProducts.cart.indexOf(action.payload),
        1
      );
    },
    addProductToLiked(state, action) {
      state.savedProducts.liked.push(action.payload);
    },
    removeProductFromLiked(state, action) {
      state.savedProducts.liked.splice(
        state.savedProducts.liked.indexOf(action.payload),
        1
      );
    },
  },
});

export const {
  SignUp,
  Login,
  Logout,
  getUserById,
  addToCart,
  removeProductFromCart,
  addProductToLiked,
  removeProductFromLiked,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
