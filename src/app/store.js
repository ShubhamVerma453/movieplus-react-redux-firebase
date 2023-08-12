import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/userSlice';
import sliderSlice from '../features/counter/sliderSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    slides: sliderSlice
  },
});
