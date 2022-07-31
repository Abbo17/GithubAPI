import { all, put, takeLatest, call } from "redux-saga/effects";
import { genericFetch } from "../../api/api";
import { fetchRepositories } from "../../api/repositories";
import { fetchUsers } from "../../api/users";
import { NOTIFICATIONS_TYPES } from "../../utils/constants";
import actionsTypes from "../actions/actionsTypes";
import { showNotification } from "../actions/global";
import { loadRepositories } from "../actions/repositories";
import { loadUserInfo, loadUsers } from "../actions/users";

export default function* promotionsSaga() {
    yield all([
        yield takeLatest(
            actionsTypes.REPOSITORIES_FETCH,
            watchFetchRepositories
        ),
    ]);
}

function* watchFetchRepositories(action) {
    try {
        let data = yield call(fetchRepositories, action.data);

        if (data) {
            data["page"] = action.data.page;
            yield put(loadRepositories(data));
        }
    } catch (err) {
        yield put(
            showNotification({
                type: NOTIFICATIONS_TYPES.ERROR,
                text: err.message,
            })
        );
    }
}
