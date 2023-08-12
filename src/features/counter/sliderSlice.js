import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    slides: {}
};

export const sliderSlice = createSlice({
    name: 'slides',
    initialState,
    reducers: {
        addSlide: (state, action) => {
            state.slides = { ...state.slides, ...action.payload };
        }
    }
});

export const { addSlide } = sliderSlice.actions;
export const selectSlides = (state) => state.slides.slides;
export default sliderSlice.reducer;
