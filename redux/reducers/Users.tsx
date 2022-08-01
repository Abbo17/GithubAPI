import _ from "lodash";
import actionsTypes from "../actions/actionsTypes";
const initialState = {
    list: [],
    usersInfo:{},
    page: 1,
    perPage:5,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionsTypes.USERS_FETCH:
            return {
                ...state,
                page: action.data.page,
            };
        case actionsTypes.USERS_LOAD:
            let newItems = [];

            if (action.data.page == 1) {
                newItems = action.data.items;
            } else {
                newItems = [...state.list, ...action.data.items];
            }
            return {
                ...state,
                list: newItems,
                total: action.data.total_count,
            };
        case actionsTypes.USERS_CLEAR_SEARCH:
            return {
                ...state,
                list: null,
                page: 1,
            };
        case actionsTypes.USER_LOAD_INFO:
            let newUsersInfo = {...state.usersInfo}

            if (!newUsersInfo[action.data.user]){
                newUsersInfo[action.data.user] = {}
            }
            newUsersInfo[action.data.user][action.data.code] = action.data.value

            return {
                ...state,
                usersInfo: newUsersInfo,
            };

        case actionsTypes.USERS_SET_PER_PAGE:
            return {
                ...state,
                perPage: action.data
            }
        default:
            return state;
    }
}

export default reducer;
