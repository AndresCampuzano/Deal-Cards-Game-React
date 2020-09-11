// Redux
import { combineReducers, compose, createStore } from 'redux';
import reducer from '../reducer';

const AllReducers = combineReducers({
    cards: reducer
});

const store = createStore(AllReducers);

export default store;
