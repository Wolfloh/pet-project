import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux';
import { allAudioReducer } from './reducers/allAudioReducer';
import { todosReducer } from './reducers/todosReducer';

export const rootReducer = combineReducers({
    allAudioReducer,
    todosReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));


