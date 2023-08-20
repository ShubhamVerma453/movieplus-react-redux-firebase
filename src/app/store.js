import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/userSlice';
import sliderSlice from '../features/counter/sliderSlice';
import alertSlice from '../features/counter/alertSlice';
import watchlistSlice from '../features/counter/watchlistSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    slides: sliderSlice,
    alert: alertSlice,
    watchlist: watchlistSlice,
  },
});
