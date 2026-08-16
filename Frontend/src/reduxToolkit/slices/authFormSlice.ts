import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type StateInterface from "@/interfaces/authFormSliceState";

const initialState: StateInterface = {
  name: "",
  email: "",
  password: "",
  passwordType: "password",
  confirmPassword: "",
  isChecked: false,
};

const authFormSlice = createSlice({
  name: "authFormSlice",
  initialState,
  reducers: {
    setName: (state: StateInterface, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state: StateInterface, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (
      state: StateInterface,
      action: PayloadAction<string>,
    ) => {
      state.password = action.payload;
    },
    setPasswordType: (
      state: StateInterface,
      action: PayloadAction<"password" | "text">,
    ) => {
      state.passwordType = action.payload;
    },
    setConfirmPassword: (
      state: StateInterface,
      action: PayloadAction<string>,
    ) => {
      state.confirmPassword = action.payload;
    },
    setIsChecked: (state: StateInterface) => {
      state.isChecked = !state.isChecked;
    },
    reset: (state: StateInterface) => {
      state.name = "";
      state.email = "";
      state.password = "";
      state.passwordType = "password";
      state.confirmPassword = "";
      state.isChecked = false;
    },
  },
});

export const {
  setName,
  setEmail,
  setPassword,
  setPasswordType,
  setConfirmPassword,
  setIsChecked,
  reset
} = authFormSlice.actions;

export default authFormSlice.reducer;