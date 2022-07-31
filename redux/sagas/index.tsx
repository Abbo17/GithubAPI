import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";

import Users from "./Users";
import Global from "./Global";

export default function* rootSaga() {
    yield all([Users(), Global()]);
}
