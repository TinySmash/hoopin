import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { productsReducer } from "./productSlice";

const rootReducer = combineReducers({
  user: userReducer,
  Products: productsReducer,
});

export default rootReducer;
