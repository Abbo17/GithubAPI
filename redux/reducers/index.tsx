import { combineReducers } from "redux";

import Users from "./Users";
import Global from "./Global";
const createRootReducer = function () {
    return combineReducers({
        Users: Users,
        Global: Global,
    });
};

export default createRootReducer();
