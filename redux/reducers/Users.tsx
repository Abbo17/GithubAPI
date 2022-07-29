import actionsTypes from "../actions/actionsTypes";
const initialState = {
    list: [],
    page: 1,
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

            console.log("Hola aca", action.data);
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
        default:
            return state;
    }
}

export default reducer;
