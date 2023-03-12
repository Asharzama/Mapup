import { createSlice } from '@reduxjs/toolkit';

export const mapSlice = createSlice({
  name: 'map',
  initialState: {
    center: [51.505, -0.09],
  },
  reducers: {
    setMapCenter: (state, action) => {
      state.center = action.payload;
    },
  },
});

export const { setMapCenter } = mapSlice.actions;

export const selectMapCenter = (state) => state.map.center;

export default mapSlice.reducer;
