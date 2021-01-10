import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
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

export const selectProjects = (state) => state.projects;
export const selectDarkTheme = (state) => state.darkTheme;
export const selectLoading = (state) => state.loading;
export const {
  switchTheme,
  startFetchProjects,
  fetchProjectsSuccess,
} = projectsSlice.actions;

export default projectsSlice.reducer;
