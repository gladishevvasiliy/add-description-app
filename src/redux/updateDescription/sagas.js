import { call, put, takeEvery } from 'redux-saga/effects'

import {
    updateDescriptionSuccess,
    updateDescriptionFailed,
} from './actions';

function* fetchNewDescription(action) {
    console.log(JSON.stringify(action.payload))
    try {
        const value = yield call(() => {
            return fetch('lol',
                {
                    method: "post",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(action.payload)
                })
        })
        console.log(value)
        yield put(updateDescriptionSuccess(value))
    } catch (e) {
        yield put(updateDescriptionFailed(e));
    }
}

export default function* fetchNewDescriptionSaga() {
    yield takeEvery("UPDATE_DESCRIPTION", fetchNewDescription);
}
