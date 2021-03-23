import { actionNames } from '../actions/ActionNames'
import { ActionInterface, StateInterface } from './ReducerInterfaces'
import { Reducer } from 'redux'

const initialState:StateInterface = { counter: 0 }

const counterReducer: Reducer<StateInterface, ActionInterface> = ( state = initialState, action ) => {
    switch( action.type ) {
        case actionNames.INCREMENT_NUMBER: 
            return { counter: state.counter +1 }
                        
        default: 
        return state
    }
}

export default counterReducer