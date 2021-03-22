import { actionNames } from '../actions/ActionNames'
import { ActionInterface, StateInterface } from './ReducerInterfaces'

const initialState:StateInterface = { counter: 0 }

const counterReducer = ( state = initialState, action:ActionInterface ) => {
    switch( action.type ) {
        case actionNames.INCREMENT_NUMBER: 
            return { counter: state.counter +1 }
                        
        default: 
        return state
    }
}
export default counterReducer