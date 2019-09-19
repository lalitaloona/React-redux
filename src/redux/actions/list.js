export const fetchListInitialize = () => ({
    type: 'FETCH_LIST_INITIALIZE'
})

export const fetchListSuccess = (data) => ({
    type: 'FETCH_LIST_SUCCESS',
    payload: data
})

export const fetchListError = (data) => ({
    type: 'FETCH_LIST_ERROR',
    payload: data
})