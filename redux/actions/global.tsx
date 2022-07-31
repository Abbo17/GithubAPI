import actionTypes from "./actionsTypes";

export const fetchRateLimit = () => {
    return {
        type: actionTypes.GLOBAL_FETCH_RATE_LIMIT,
    };
};

export const loadRateLimit = (data) => {
    return {
        type: actionTypes.GLOBAL_LOAD_RATE_LIMIT,
        data,
    };
};


export const showNotification = (data) => {
    return {
        type: actionTypes.GLOBAL_SHOW_NOTIFICATION,
        data,
    };
};

export const closeNotification = () => {
    return {
        type: actionTypes.GLOBAL_CLOSE_NOTIFICATION,
    };
};
