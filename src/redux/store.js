import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import { watchFetchList } from './symbolsList/listSagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchFetchList)

export default store