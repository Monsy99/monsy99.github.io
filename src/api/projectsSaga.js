import { takeLatest, put, call, delay } from "redux-saga/effects";
import { getProjects } from "./getProjects";
import { fetchProjectsSuccess, startFetchProjects } from "./projectsSlice";

function* fetchProjectsHandler() {
  try {
    const data = yield call(getProjects);
    yield delay(1000);
    yield put(fetchProjectsSuccess(data));
  } catch (error) {
    yield call(console.log, error);
  }
}

export function* watchFetchProjects() {
  yield takeLatest(startFetchProjects.type, fetchProjectsHandler);
}
