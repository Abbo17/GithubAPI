import _ from "lodash";
import actionsTypes from "../actions/actionsTypes";
const initialState = {
    list: [],
    page: 1,
    perPage: 20,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionsTypes.REPOSITORIES_FETCH:
            return {
                ...state,
                page: action.data.page,
            };
        case actionsTypes.REPOSITORIES_LOAD:
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
        case actionsTypes.REPOSITORIES_CLEAR_SEARCH:
            return {
                ...state,
                list: null,
                page: 1,
            };
        default:
            return state;
    }
}

export default reducer;
