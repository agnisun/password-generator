import { createSlice } from "@reduxjs/toolkit";

export const generateSlice = createSlice({
  name: "generate",
  initialState: {
    strategies: ["lowercase", "uppercase"],
    length: "12",
    password: "",
  },
  reducers: {
    setPasswordLength: (state, action) => {
      state.length = action.payload;
    },
    setStrategies: (state, action) => {
      state.strategies = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setPasswordLength, setStrategies, setPassword } =
  generateSlice.actions;
export default generateSlice.reducer;
