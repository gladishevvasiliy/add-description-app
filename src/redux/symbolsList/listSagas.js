import { put, call, takeEvery } from 'redux-saga/effects'

import {
    loadList,
    loadListSuccess,
    loadListFailed
} from './listActions';

export function* watchFetchList() {
    console.log("object")
    yield takeEvery('FETCHED_LIST', loadListSaga);
}

function* loadListSaga() {
    console.log("object2")
    try {
        yield put(loadList());
        const data = yield call(() => {
            return fetch('https://tranquil-plateau-55628.herokuapp.com/kruk/all')
                .then(res => {
                    console.log({ res })
                    return res.json()
                })
        }
        );
        yield put(loadListSuccess(data));
    } catch (error) {
        yield put(loadListFailed());
    }
}