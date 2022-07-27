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