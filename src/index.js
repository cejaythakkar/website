import React from 'react';
import ReactDOM from 'react-dom';
import {createStore , combineReducers} from 'redux';
import './index.css';
import AppRoutes from './routes';
import * as serviceWorker from './serviceWorker';
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';
import { Provider } from 'react-redux';
const rootReducer = combineReducers({
    ctr : counterReducer,
    result : resultsReducer
});
const store = createStore(rootReducer);
ReactDOM.render(
                <Provider store={store}>
                    <AppRoutes />
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
