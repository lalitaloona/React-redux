const initialState = {
    list: [],
    listLoader: false,
    listError: ''
}

export default function listReducers(state = initialState, action){
    const { payload, type } = action

    switch (type){
        case 'FETCH_LIST_INITIALIZE':
            return { ...state, listLoader: true }

        case 'FETCH_LIST_SUCCESS':
            return{ ...state, listLoader: false, list: payload }
            
        case 'FETCH_LIST_ERROR':
            return{ ...state, listloader: false, listError: payload}
        
        default:
            return state    
    }
}