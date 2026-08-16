import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type StateInterface from "@/interfaces/userAuthenticitySliceState";

const initialState: StateInterface = {
  isLoading: true,
  isAuthentic: false,
  isOnboarded: undefined,
};

const userAuthenticitySlice = createSlice({
  name: "userAuthenticitySlice",
  initialState,
  reducers: {
    setIsLoading: (state: StateInterface, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsAuthentic: (state: StateInterface, action: PayloadAction<boolean>) => {
      state.isAuthentic = action.payload;
    },
    setIsOnboarded: (
      state: StateInterface,
      action: PayloadAction<boolean | undefined>,
    ) => {
      state.isOnboarded = action.payload;
    },
    reset: (state: StateInterface) => {
      state.isLoading = true;
      state.isAuthentic = false;
      state.isOnboarded = undefined;
    },
  },
});

export const { setIsLoading, setIsAuthentic, setIsOnboarded, reset } =
  userAuthenticitySlice.actions;

export default userAuthenticitySlice.reducer;
