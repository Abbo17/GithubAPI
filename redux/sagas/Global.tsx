import { all, put, takeLatest, call } from "redux-saga/effects";
import { fetchRateLimit } from "../../api/global";
import { NOTIFICATIONS_TYPES } from "../../utils/constants";
import actionsTypes from "../actions/actionsTypes";
import { loadRateLimit, showNotification } from "../actions/global";

export default function* promotionsSaga() {
    yield all([
        yield takeLatest(
            actionsTypes.GLOBAL_FETCH_RATE_LIMIT,
            watchFetchRateLimit
        ),
    ]);
}

function* watchFetchRateLimit(_action) {
    try {
        let data = yield call(fetchRateLimit);

        if (data) {
            yield put(loadRateLimit(data));
        }
    } catch (err) {
        yield put(showNotification({
            type:NOTIFICATIONS_TYPES.ERROR,
            text:err
        }))
    }
}
