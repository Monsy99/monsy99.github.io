import { combineReducers, configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./api/projectsSlice";
import themeReducer from "./theme/themeSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  theme: themeReducer,
  projects: projectsReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
