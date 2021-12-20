// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 cameraImage : 0
};


export const cameraSlice = createSlice({
  name: 'camera',
  initialState,
  reducers: {
    setCameraImage: ( state, action ) => {
      state.cameraImage = action.payload
    },
    resetCameraImage : (state) => {
        state.cameraImage = null;
    }
  },
 });


//  destructuring actions from the created slice
export const { setCameraImage , resetCameraImage } = cameraSlice.actions;


// accessing the reducer state
export const selectCameraImage = (state) => state.camera.cameraImage;

// exporting the cameraSlice reducer go straight to the Redux store
export default cameraSlice.reducer;



