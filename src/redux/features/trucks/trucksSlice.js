import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trucks: [],
  status: 'idle',
  error: null,
};

const trucksSlice = createSlice({
  name: 'trucks',
  initialState,
  reducers: {
    setTrucks: (state, action) => {
      state.trucks = action.payload;
    },
  },
});

export const { setTrucks } = trucksSlice.actions;
export default trucksSlice.reducer;
