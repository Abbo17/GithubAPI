import actionTypes from './actionsTypes'

export const fetchUsers = (data) => {
    return {
        type:actionTypes.USERS_FETCH,
        data
    }
}


export const loadUsers = (data) => {
    return {
        type:actionTypes.USERS_LOAD,
        data
    }
}

export const clearSearch = () => {
    return {
        type:actionTypes.USERS_CLEAR_SEARCH,
    }
}

export const fetchUserInfo = (data) => {
    return {
        type:actionTypes.USER_FETCH_INFO,
        data
    }
}

export const loadUserInfo = (data) => {
    return {
        type:actionTypes.USER_LOAD_INFO,
        data
    }
}

export const setPerPageUsers = (data) => {
    return {
        type:actionTypes.USERS_SET_PER_PAGE,
        data
    }
}