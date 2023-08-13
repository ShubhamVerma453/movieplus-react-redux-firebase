import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/userSlice';
import sliderSlice from '../features/counter/sliderSlice';
import alertSlice from '../features/counter/alertSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    slides: sliderSlice,
    alert: alertSlice
  },
});
