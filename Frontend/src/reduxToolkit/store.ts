import { configureStore } from "@reduxjs/toolkit";
import userAuthenticitySliceReducer from "./slices/userAuthenticitySlice";
import authFormSliceReducer from "./slices/authFormSlice";
import onboardingFormSliceReducer from "./slices/onboardingFormSlice";
import profileDetailsSliceReducer from "./slices/profileDetailsSlice";
import exerciseListSliceReducer from "./slices/exerciseLibrarySlice";
import workoutPlanSliceReducer from "./slices/workoutPlanSlice";
import logWorkoutSliceReducer from "./slices/logWorkoutSlice";
import logWorkoutTodaySessionSliceReducer from "./slices/logWorkoutTodaySessionSlice";
import workoutHistorySliceReducer from "./slices/workoutHistorySlice";
import exerciseDetailModalSliceReducer from "./slices/exerciseDetailModalSlice";
import dashboardSliceReducer from "./slices/dashboardSlice";

export const store = configureStore({
  reducer: {
    userAuthenticitySliceReducer,
    authFormSliceReducer,
    onboardingFormSliceReducer,
    profileDetailsSliceReducer,
    exerciseListSliceReducer,
    workoutPlanSliceReducer,
    logWorkoutSliceReducer,
    logWorkoutTodaySessionSliceReducer,
    workoutHistorySliceReducer,
    exerciseDetailModalSliceReducer,
    dashboardSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
