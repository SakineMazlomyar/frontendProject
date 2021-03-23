import { createStore, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from '../reducers'
import { ActionInterface } from '../reducers/ReducerInterfaces'
const initialState: Object = {}

const store:Store<Object, ActionInterface>= createStore( rootReducers, initialState ,applyMiddleware(...[ thunk ]) )

export default store
