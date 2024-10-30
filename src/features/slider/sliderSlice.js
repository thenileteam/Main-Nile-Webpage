import { createSlice } from "@reduxjs/toolkit";
import storeImg from '../../assets/goblins.png';
import storeImg1 from '../../assets/joes.png';
const initialState = {
  sliderSettings: {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
  },
  sliderImages:[{id:0,url:'https://goblinandcoal.store/', image:storeImg}, {id:1, url:'https://joeparson.ng/',image:storeImg1}],
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