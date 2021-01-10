import { watchFetchProjects } from "./api/projectsSaga";

export default function* rootSaga() {
  yield watchFetchProjects();
}
