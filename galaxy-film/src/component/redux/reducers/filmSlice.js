import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    addFilm: (state, action) => {
      state.data = action.payload;
    },
    deleteFilm: () => initialState,

    addSeat: (state, action) => {
      state.data = [...state.data, ...action.payload];
    },
    addPayment: (state, action) => {
      state.data = [...state.data, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFilm, deleteFilm, addSeat,addPayment } = filmSlice.actions;

export default filmSlice.reducer;
