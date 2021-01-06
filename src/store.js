import { configureStore, createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    darkTheme: true,
    projects: null,
    loading: false,
  },
  reducers: {
    switchTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
    startFetchProjects: (state) => {
      state.loading = true;
    },
    fetchProjectsSuccess: (state, { payload }) => {
      state.projects = payload;
      state.loading = false;
    },
  },
});

const store = configureStore({
  reducer: appSlice.reducer,
});

const selectProjects = (state) => state.projects;
const selectDarkTheme = (state) => state.darkTheme;
const selectLoading = (state) => state.loading;

export { selectDarkTheme, selectProjects, selectLoading };
export const {
  switchTheme,
  startFetchProjects,
  fetchProjectsSuccess,
} = appSlice.actions;
export default store;
