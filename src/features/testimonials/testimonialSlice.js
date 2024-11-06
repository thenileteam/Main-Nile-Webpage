import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sliderSettings: {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 700, // For mobile devices (width <= 700px)
        settings: {
          slidesToShow: 1,
          dots: true,
          slidesToScroll:1,
        },
      },
      {
        breakpoint: 1024, // For mobile devices (width <= 1024px)
        settings: {
          slidesToShow: 2,
          slidesToScroll:2,
          dots: true,
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
