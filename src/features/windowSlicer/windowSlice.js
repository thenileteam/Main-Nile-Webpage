import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    windowWidth: window.innerWidth
    
}

export const windowSlice = createSlice({
    name: 'windowSlice',
    initialState,
    reducers: {
        setWindowWidth: (state, action)=>{
            state.windowWidth= action.payload
        }
    }
})

export const { setWindowWidth } = windowSlice.actions;
export default windowSlice.reducer;