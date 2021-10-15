import { createSlice } from "@reduxjs/toolkit";

export const generateSlice = createSlice({
  name: "generate",
  initialState: {
    radio: "3",
    checkbox: ["lowercase"],
    passwordLength: "12",
    reliabilityColor: "grey",
    password: "",
  },
  reducers: {
    setRadio: (state, action) => {
      state.radio = action.payload;
    },
    setPasswordLength: (state, action) => {
      state.passwordLength = action.payload;
    },
    setCheckboxArr: (state, action) => {
      state.checkbox = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setRadio, setPasswordLength, setCheckboxArr, setPassword } =
  generateSlice.actions;
export default generateSlice.reducer;
