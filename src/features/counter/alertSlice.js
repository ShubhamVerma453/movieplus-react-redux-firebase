import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alert: false,
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state) => {
      state.alert = true;
    },
    closeAlert: (state) => {
      state.alert = false;
    }
  }
});

export const { showAlert, closeAlert } = alertSlice.actions;
export const selectAlert = (state) => state.alert.alert;
export default alertSlice.reducer;
