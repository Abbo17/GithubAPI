import { NOTIFICATIONS_TYPES } from "../../utils/constants";
import actionsTypes from "../actions/actionsTypes";

const initialState = {
    rateLimit: {},
    notification: {
        show: false,
        text: "",
        type: NOTIFICATIONS_TYPES.ERROR,
    },
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionsTypes.GLOBAL_LOAD_RATE_LIMIT:
            return {
                ...state,
                rateLimit: action.data,
            };
        case actionsTypes.GLOBAL_SHOW_NOTIFICATION:

            return {
                ...state,
                notification: {
                    show: true,
                    text: action.data.text,
                    type: action.data.type,
                },
            };
        case actionsTypes.GLOBAL_CLOSE_NOTIFICATION:
            return {
                ...state,
                notification: {
                    show: false,
                    text: "",
                    type: NOTIFICATIONS_TYPES.INFORMATION,
                },
            };
        default:
            return state;
    }
}

export default reducer;
