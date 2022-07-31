import { all, put, takeLatest, call } from "redux-saga/effects";
import { fetchUsers } from "../../api/users";
import { NOTIFICATIONS_TYPES } from "../../utils/constants";
import actionsTypes from "../actions/actionsTypes";
import { showNotification } from "../actions/global";
import { loadUsers } from "../actions/users";

export default function* promotionsSaga() {
    yield all([yield takeLatest(actionsTypes.USERS_FETCH, watchFetchUsers)]);
}

function* watchFetchUsers(action) {
    try {
        let data = yield call(fetchUsers, action.data);

        if (data) {
            data["page"] = action.data.page;
            yield put(loadUsers(data));
        }
    } catch (err) {
        console.log("Hola err", err);

        yield put(
            showNotification({
                type: NOTIFICATIONS_TYPES.ERROR,
                text: err.message,
            })
        );
    }
}
