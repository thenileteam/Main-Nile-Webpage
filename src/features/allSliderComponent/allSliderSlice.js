import { createSlice } from "@reduxjs/toolkit";
import slide1 from "../../assets/logo3.svg";
import slide2 from "../../assets/logo1.svg";
import slide3 from "../../assets/logo4.svg";
import slide4 from "../../assets/logo5.svg";
import slide5 from "../../assets/logo6.svg";
import slide6 from "../../assets/logo7.svg";
import slide7 from "../../assets/logo11.svg";
const initialState = {
  settings: {
    infinite: true,
    speed: 500,
    slidesToShow: 4,  //desktop default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: false,  
    dots: false, 
    responsive: [
      {
        breakpoint: 768, // For mobile devices (width <= 768px)
        settings: {
          slidesToShow: 2,   
        }
      }
    ]
  },
  slides: [
    { id: 0, image: slide1 },
    { id: 1, image: slide3 },
    { id: 2, image: slide4 },
    { id: 3, image: slide7 },
    { id: 5, image: slide2 },
    { id: 6, image: slide6 },
    { id: 7, image: slide5 },
  ],
};

const allSliderSlice = createSlice({
  name: "allSlider",
  initialState,
  reducers: {
    autoplay: (state, action) => {
      state.settings.autoplay = action.payload;
    },
    updateSliderSettings: (state, action) => {
      state.settings = { ...state.sliderSettings, ...action.payload };
    },
  },
});
export const { autoplay, updateSliderSettings } = allSliderSlice.actions;

export default allSliderSlice.reducer;
