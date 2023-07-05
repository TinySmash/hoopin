import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'Products',
  initialState: {
    filterProducts: {
      byCategory: {
        enabled: false,
        categories: ['All']
      },
      priceRange: {
        enabled: false,
        min: 0,
        max: 9999999
      },
      sorted: 'BY_ID',
      bySearchInput: {
        enabled: false,
        input: ''
      }
    },
    likedProducts: [],
    specialOffers: []
  },
  reducers: {
    addProductToCart(state, action) {
      state.cart.push(action.payload);
    },
    removeProductFromCart(state, action) {
      state.cart.splice(state.cart.indexOf(action.payload), 1);
    },
    addProductToLiked(state, action) {
      state.likedProducts.push(action.payload);
    },
    removeProductFromLiked(state, action) {
      state.likedProducts.splice(
        state.likedProducts.indexOf(action.payload),
        1
      );
    },
    filterProductsByCategory(state, action) {
      if (!state.filterProducts.byCategory.enabled) {
        state.filterProducts.byCategory.enabled = true;
        state.filterProducts.byCategory.categories =
          state.filterProducts.byCategory.categories.filter(e => e !== 'All');
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
        state.filterProducts.byCategory.categories = ['All'];
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
      state.filterProducts.bySearchInput.input = '';
    },
    filterByPriceRange(state, action) {
      if (action.payload.min !== '' || action.payload.max !== '') {
        state.filterProducts.priceRange.enabled = true;
        state.filterProducts.priceRange.min = action.payload.min;
        state.filterProducts.priceRange.max = action.payload.max;
      } else {
        state.filterProducts.priceRange.enabled = false;
        state.filterProducts.priceRange.min = 0;
        state.filterProducts.priceRange.max = 9999999;
      }
    }
  }
});

export const {
  addProductToCart,
  removeProductFromCart,
  addProductToLiked,
  removeProductFromLiked,
  filterProductsByCategory,
  unfilterProductsByCategory,
  filterBySearchInput,
  unfilterBySearchInput,
  filterByPriceRange
} = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
