import { all, put, takeLatest, call , takeEvery} from "redux-saga/effects";
import { genericFetch } from "../../api/api";
import { fetchUsers } from "../../api/users";
import { NOTIFICATIONS_TYPES } from "../../utils/constants";
import actionsTypes from "../actions/actionsTypes";
import { showNotification } from "../actions/global";
import { loadUserInfo, loadUsers } from "../actions/users";

export default function* promotionsSaga() {
    yield all([yield takeLatest(actionsTypes.USERS_FETCH, watchFetchUsers)]);
    yield all([
        yield takeEvery(actionsTypes.USER_FETCH_INFO, watchFetchUserInfo),
    ]);
}

function* watchFetchUsers(action) {
    try {
        let data = yield call(fetchUsers, action.data);

        if (data) {
            data["page"] = action.data.page;
            yield put(loadUsers(data));
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

function* watchFetchUserInfo(action) {
    try {
        let data = yield call(genericFetch, action.data.url);

        if (data) {
            yield put(
                loadUserInfo({
                    code: action.data.code,
                    user: action.data.user,
                    value: data?.length,
                })
            );
        }
    } catch (err) {
        yield put(
            loadUserInfo({
                code: action.data.code,
                user: action.data.user,
                value: null,
            })
        );
        yield put(
            showNotification({
                type: NOTIFICATIONS_TYPES.ERROR,
                text: err.message,
            })
        );
    }
}
