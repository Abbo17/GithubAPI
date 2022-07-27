import actionsTypes from "../actions/actionsTypes";
const initialState = {
    list:[]
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionsTypes.USERS_LOAD:
            return {
                ...state,
                list:action.data
            };
        default:
            return state;
    }
}

export default reducer;
