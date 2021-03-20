import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from '../reducers'

const initialState: Object = {}
const middleWare = [ thunk ]

const store = createStore( rootReducers ,initialState , applyMiddleware(...middleWare) )

export default store
