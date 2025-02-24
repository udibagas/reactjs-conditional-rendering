import { createSlice } from "@reduxjs/toolkit";

export const localeSlice = createSlice({
  name: "locale",
  initialState: {
    locale: "id",
  },
  // action untuk ngubah state
  reducers: {
    setLocale: (state, { payload }) => {
      state.locale = payload;
    },
  },
});

export const { setLocale } = localeSlice.actions;
export default localeSlice.reducer;
