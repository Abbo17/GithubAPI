import actionTypes from './actionsTypes'

export const fetchRepositories = (data) => {
    return {
        type:actionTypes.REPOSITORIES_FETCH,
        data
    }
}


export const loadRepositories = (data) => {
    return {
        type:actionTypes.REPOSITORIES_LOAD,
        data
    }
}

export const clearSearch = () => {
    return {
        type:actionTypes.REPOSITORIES_CLEAR_SEARCH,
    }
}
