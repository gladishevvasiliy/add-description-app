import { put, call, takeEvery } from 'redux-saga/effects'

import {
    loadList,
    loadListSuccess,
    loadListFailed
} from './listActions';

export function* watchFetchList() {
    yield takeEvery('FETCHED_LIST', loadListSaga);
}

function* loadListSaga() {
    try {
        yield put(loadList());
        const data = yield call(() => {
            return fetch('https://tranquil-plateau-55628.herokuapp.com/kruk/all')
                .then(res => {
                    return res.json()
                }).then(data => data)
        }
        )
        yield put(loadListSuccess(data));
    } catch (error) {
        yield put(loadListFailed());
    }
}