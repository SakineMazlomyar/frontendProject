import { actionNames } from '../actions/ActionNames'
import { Action, State } from './ReducerInterfaces'

const initialState:State = { counter: 0 }

const counterReducer = ( state = initialState, action:Action ) => {
    switch( action.type ) {
        case actionNames.INCREMENT_NUMBER: 
            return { counter: state.counter +1 }

        case actionNames.DECREMENT_NUMBER: 
            return { counter: state.counter -1 }
            
        default: 
        return state
    }
}
export default counterReducer