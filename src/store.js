import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './components/reducers';

const store = configureStore({
  reducer: rootReducer
});

export default store;
