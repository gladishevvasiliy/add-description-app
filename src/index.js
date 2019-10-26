import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'

// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import store from './redux/store'

// const rootElement = document.getElementById('root')
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     rootElement
// )
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { put, call, takeEvery } from 'redux-saga/effects'

// Reducer
const initialState = {
    list: [],
    loading: false,
    error: false,
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUESTED_LIST':
            return {
                list: [],
                loading: true,
                error: false,
            };
        case 'REQUESTED_LIST_SUCCEEDED':
            return {
                list: action.payload,
                loading: false,
                error: false,
            };
        case 'REQUESTED_LIST_FAILED':
            return {
                list: [],
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};

// Action Creators
const requestList = () => {
    return { type: 'REQUESTED_LIST' }
};

const requestListSuccess = (data) => {
    return { type: 'REQUESTED_LIST_SUCCEEDED', url: data.message }
};

const requestListError = () => {
    return { type: 'REQUESTED_LIST_FAILED' }
};

const fetchList = () => {
    return { type: 'FETCHED_LIST' }
};

// Sagas
function* watchFetchList() {
    yield takeEvery('FETCHED_LIST', fetchDogAsync);
}

function* fetchDogAsync() {
    try {
        yield put(requestList());
        const data = yield call(() => {
            return fetch('https://tranquil-plateau-55628.herokuapp.com/kruk/all')
                .then(resp => {
                    return resp.json()
                }).then(data => console.log(data))
        }
        );
        yield put(requestListSuccess(data));
    } catch (error) {
        yield put(requestListError());
    }
}

// Component
class App extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.dispatch(fetchList())}>Show Dog</button>
                {this.props.loading
                    ? <p>Loading...</p>
                    : this.props.error
                        ? <p>Error, try again</p>
                        : <p><img src={this.props.url} /></p>}
            </div>
        )
    }
}

// Store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchFetchList);

const ConnectedApp = connect((state) => {
    console.log(state);
    return state;
})(App);

// Container component
ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>,
    document.getElementById('root')
);