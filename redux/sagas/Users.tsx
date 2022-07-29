import { all, put, takeLatest, call } from "redux-saga/effects";
import { fetchUsers } from "../../api/users";
import actionsTypes from "../actions/actionsTypes";
import { loadUsers } from "../actions/users";

export default function* promotionsSaga() {
    yield all([yield takeLatest(actionsTypes.USERS_FETCH, watchFetchUsers)]);
}

function* watchFetchUsers(action) {
    try {
        let data = yield call(fetchUsers, action.data);

        if (data) {
            data["page"] = action.data.page
            yield put(loadUsers(data));
        }
    } catch (err) {
        //COMPLETAR ERROR
    }
}
