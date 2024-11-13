import { configureStore } from '@reduxjs/toolkit';
import buildingsReducer from './buildingsSlice';

const store = configureStore({
  reducer: {
    buildings: buildingsReducer,
  },
});

export default store;
