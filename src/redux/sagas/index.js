import { takeLatest } from 'redux-saga/effects'

import { fetchListSaga } from './listSaga'
import { fetchDetailSaga, getBooksSaga } from './detailSaga'

export default function* watcherSaga () {
    yield takeLatest('FETCH_LIST_INITIALIZE', fetchListSaga)
    yield takeLatest('FETCH_DETAIL_INITIALIZE', fetchDetailSaga)
    yield takeLatest('GET_BOOKS_INITIALIZE', getBooksSaga)
}