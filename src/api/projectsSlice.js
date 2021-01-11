import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: null,
    loading: false,
  },
  reducers: {
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
export const selectProjectsData = (state) => selectProjects(state).projects;
export const selectLoading = (state) => selectProjects(state).loading;

export const {
  startFetchProjects,
  fetchProjectsSuccess,
} = projectsSlice.actions;

export default projectsSlice.reducer;
