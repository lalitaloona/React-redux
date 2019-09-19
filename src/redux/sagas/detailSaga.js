import { put } from 'redux-saga/effects'
import axios from 'axios'

import { fetchDetailSuccess, fetchDetailError, getBooksSuccess, getBooksError } from '../actions/detailList';

export function* fetchDetailSaga({ payload }) {
    try {
        const result = yield axios.get(`https://www.anapioficeandfire.com/api/characters/${payload}`)
        yield put(fetchDetailSuccess(result.data))
    }
    catch(err){
        yield put(fetchDetailError(err.message))
    }
        
}

export function* getBooksSaga({ payload }) {
    try {
        const result = yield axios.get(payload)
        yield put(getBooksSuccess(result.data))
    }
    catch(err) {
        yield put(getBooksError(err.message))
    }
}