export const fetchDetailInitialize = (data) => ({
    type: 'FETCH_DETAIL_INITIALIZE',
    payload: data
})

export const fetchDetailSuccess = (data) => ({
    type: 'FETCH_DETAIL_SUCCESS',
    payload: data
})

export const fetchDetailError = (data) => ({
    type: 'FETCH_DETAIL_ERROR',
    payload: data
})

export const getBooksInitialize = (data) => ({
    type: 'GET_BOOKS_INITIALIZE',
    payload: data
})

export const getBooksSuccess = (data) => ({
    type: 'GET_BOOKS_SUCCESS',
    payload: data
})

export const getBooksError = (data) => ({
    type: 'GET_BOOKS_ERROR',
    payload: data
})