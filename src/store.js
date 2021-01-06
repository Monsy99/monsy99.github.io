import { configureStore, createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    darkTheme: true,
  },
  reducers: {
    switchTheme: ({ darkTheme }) => (darkTheme = !darkTheme),
  },
});

const store = configureStore({
  reducer: appSlice.reducer,
});
export const { switchTheme } = appSlice.actions;
export default store;
