import { createSlice } from "@reduxjs/toolkit";
import storeImg from '../../assets/store-2.svg'
import storeImg1 from '../../assets/store-r.png'
const initialState = {
  sliderSettings: {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    centerMode: true,
  },
  sliderImages:[storeImg, storeImg1],
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
    reducers: {
        autoplay: (state, action) => {
            state.sliderSettings.autoplay = action.payload;
        },
        updateSliderSettings: (state, action) => {
            state.sliderSettings = { ...state.sliderSettings, ...action.payload };
        },
    }
});
export const { autoplay, updateSliderSettings } =
  sliderSlice.actions;
export default sliderSlice.reducer;