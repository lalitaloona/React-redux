import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import freeze from 'redux-freeze'
import promise from 'redux-promise'

import rootReducer from './rootReducer'
import rootSaga from './sagas'

const logger = createLogger({
    duration: true,
    timestamp: true
})

const sagaMiddleware = createSagaMiddleware()

const createStoreWithMiddleware = applyMiddleware(
    sagaMiddleware,
    promise,
    thunk,
    freeze,
    logger
)(createStore)

const store = createStoreWithMiddleware(rootReducer)

sagaMiddleware.run(rootSaga)

export default store