import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./api/projectsSlice";

const store = configureStore({
  reducer: projectsSlice,
});

export default store;
