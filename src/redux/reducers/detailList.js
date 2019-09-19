const initialState = {
    details: {},
    detailsError: '',
    detailLoader: false,
    booksLoader: false,
    booksDetails: {}
}

export default function detailReducers (state= initialState, action){
    const { payload,type } = action;

    switch (type){
        case 'FETCH_DETAIL_INITIALIZE':
            return { ...state, detailLoader: true }

        case 'FETCH_DETAIL_SUCCESS':
            return { ...state, detailLoader: false, details: payload}
        
        case 'FETCH_DETAIL_ERROR':
            return { ...state, detailLoader: false, detailsError: payload}

        case 'GET_BOOKS_INITIALIZE':
            return { ...state, bookLoader: true }

        case 'GET_BOOKS_SUCCESS': {
            return { ...state, bookLoader: false, booksDetails: payload }
        }

        case 'GET_BOOKS_ERROR': {
            return { ...state, bookLoader:false}
        }

        default: 
            return state
    }
}