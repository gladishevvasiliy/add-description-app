import { all } from 'redux-saga/effects'

import { watchFetchList } from './symbolsList/listSagas'
import fetchNewDescriptionSaga from './updateDescription/sagas'


export default function* rootSaga() {
  yield all([
    watchFetchList(),
    fetchNewDescriptionSaga()
  ])
}