import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alert: { transform: 'translateX(450px)' }
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state) => {
      state.alert = { transform: 'translateX(0px)' };
    },
    closeAlert: (state) => {
      state.alert = { transform: 'translateX(450px)' };
    }
  }
});

export const { showAlert, closeAlert } = alertSlice.actions;
export const selectAlert = (state) => state.alert.alert;
export default alertSlice.reducer;
