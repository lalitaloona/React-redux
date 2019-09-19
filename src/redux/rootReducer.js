import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import list from './reducers/list'
import detailList from './reducers/detailList'

export default combineReducers({
    list,
    detailList,
    routing: routerReducer
});