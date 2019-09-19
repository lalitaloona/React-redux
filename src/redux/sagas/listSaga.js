import { put } from 'redux-saga/effects'
import Axios from "axios";

import { fetchListSuccess, fetchListError } from '../actions/list';

export function* fetchListSaga({ payload }) {
    try {
        const result = yield Axios.get(`https://www.anapioficeandfire.com/api/characters`)
        yield put(fetchListSuccess(result.data))    
    }
    catch(err) {
        yield put(fetchListError(err.message))
    }
    
}