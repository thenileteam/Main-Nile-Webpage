import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./features/slider/sliderSlice";
import modalReducer from "./features/modal/modalSlice";
import allSliderReducer from "./features/allSliderComponent/allSliderSlice";
import testimonialReducer from "./features/testimonials/testimonialSlice";
import windowReducer from "./features/windowSlicer/windowSlice";
import formReducer from "./features/formSlicer/formSlice";
export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    modal: modalReducer,
    allSlider: allSliderReducer,
    testimonials: testimonialReducer,
    windowSlice: windowReducer,
    form:formReducer,
  },
});
