import actionsTypes from "../actions/actionsTypes";
const initialState = {
    showNotification: false,
    textNotification: "test",
};

function reducer(state = initialState, action) {
    switch (action.type) {
        
        default:
            return state;
    }
}

export default reducer;
