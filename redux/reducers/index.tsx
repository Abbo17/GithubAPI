import { combineReducers } from "redux";

import Users from "./Users";

const createRootReducer = function () {
    return combineReducers({
        Users: Users,
    });
};

export default createRootReducer();
