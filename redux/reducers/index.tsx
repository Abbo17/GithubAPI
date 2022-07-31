import { combineReducers } from "redux";

import Users from "./Users";
import Global from "./Global";
import Repositories from "./Repositories";

const createRootReducer = function () {
    return combineReducers({
        Users: Users,
        Repositories: Repositories,
        Global: Global,
    });
};

export default createRootReducer();
