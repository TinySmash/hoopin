import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "Products",
  initialState: {
    filterProducts: {
      byCategory: {
        enabled: false,
        categories: ["All"],
      },
      priceRange: {
        enabled: false,
        min: 0,
        max: 9999999,
      },
      sorted: "BY_ID",
      bySearchInput: {
        enabled: false,
        input: "",
      },
    },
    specialOffers: [],
  },
  reducers: {
    filterProductsByCategory(state, action) {
      if (!state.filterProducts.byCategory.enabled) {
        state.filterProducts.byCategory.enabled = true;
        state.filterProducts.byCategory.categories =
          state.filterProducts.byCategory.categories.filter((e) => e !== "All");
        state.filterProducts.byCategory.categories.push(action.payload);
      } else {
        state.filterProducts.byCategory.categories.push(action.payload);
      }
    },
    unfilterProductsByCategory(state, action) {
      if (state.filterProducts.byCategory.categories.length > 1) {
        state.filterProducts.byCategory.categories.splice(
          state.filterProducts.byCategory.categories.indexOf(action.payload),
          1
        );
      } else if (state.filterProducts.byCategory.categories.length == 1) {
        state.filterProducts.byCategory.enabled = false;
        state.filterProducts.byCategory.categories = ["All"];
      }
    },
    filterBySearchInput(state, action) {
      if (state.filterProducts.bySearchInput.enabled == false) {
        state.filterProducts.bySearchInput.enabled = true;
        state.filterProducts.bySearchInput.input = action.payload;
      } else {
        state.filterProducts.bySearchInput.input = action.payload;
      }
    },
    unfilterBySearchInput(state, action) {
      state.filterProducts.bySearchInput.enabled = false;
      state.filterProducts.bySearchInput.input = "";
    },
    filterByPriceRange(state, action) {
      if (action.payload.min !== "" || action.payload.max !== "") {
        state.filterProducts.priceRange.enabled = true;
        state.filterProducts.priceRange.min = action.payload.min;
        state.filterProducts.priceRange.max = action.payload.max;
      } else {
        state.filterProducts.priceRange.enabled = false;
        state.filterProducts.priceRange.min = 0;
        state.filterProducts.priceRange.max = 9999999;
      }
    },
    sortBy(state, action) {
      state.filterProducts.sorted = action.payload;
    },
  },
});

export const {
  filterProductsByCategory,
  unfilterProductsByCategory,
  filterBySearchInput,
  unfilterBySearchInput,
  filterByPriceRange,
  sortBy,
} = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
