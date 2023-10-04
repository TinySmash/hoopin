import { createSlice, current } from "@reduxjs/toolkit";

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
    removeFromCart(state, action) {
      const itemToRemove = action.payload;
      state.savedProducts.cart = state.savedProducts.cart.filter((item) => {
        // Assuming itemToRemove is a unique identifier like an ID
        return current(item) !== itemToRemove;
      });
    },

    toggleLikeProduct(state, action) {
      const likedProducts = state.savedProducts.liked;
      const productIndex = likedProducts.indexOf(action.payload);

      if (productIndex === -1) {
        likedProducts.push(action.payload);
      } else {
        likedProducts.splice(productIndex, 1);
      }
    },
    // removeProductFromLiked(state, action) {
    //   state.savedProducts.liked.splice(
    //     state.savedProducts.liked.indexOf(action.payload),
    //     1
    //   );
    // },
  },
});

export const {
  SignUp,
  Login,
  Logout,
  getUserById,
  addToCart,
  removeFromCart,
  toggleLikeProduct,
  // removeProductFromLiked,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
