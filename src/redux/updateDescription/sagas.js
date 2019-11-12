import { call, put, takeEvery } from 'redux-saga/effects'

import {
    updateDescriptionSuccess,
    updateDescriptionFailed,
} from './actions';

function* fetchNewDescription(action) {
    const { value: bodyData, categoryId, symbolId } = action.payload
    console.log(JSON.stringify({ bodyData }))
    try {
        const value = yield call(() => {
            return fetch(`https://tranquil-plateau-55628.herokuapp.com/kruk/${categoryId}/edit-description/${symbolId}`,
                {
                    method: "put",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(bodyData)
                })
        })
        console.log('success', { value })
        yield put(updateDescriptionSuccess(value))
    } catch (e) {
        yield put(updateDescriptionFailed(e));
    }
}

export default function* fetchNewDescriptionSaga() {
    yield takeEvery("UPDATE_DESCRIPTION", fetchNewDescription);
}
