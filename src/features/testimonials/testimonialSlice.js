import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sliderSettings: {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768, // For mobile devices (width <= 768px)
        settings: {
          slidesToShow: 1,
          dots: true,
          autoplay: false,
        },
      },
    ],
  },
};

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    autoplay: (state, action) => {
      state.sliderSettings.autoplay = action.payload;
    },
    updateSliderSettings: (state, action) => {
      state.sliderSettings = { ...state.sliderSettings, ...action.payload };
    },
  },
});

export const { autoplay, updateSliderSettings } = testimonialSlice.actions;
export default testimonialSlice.reducer;
