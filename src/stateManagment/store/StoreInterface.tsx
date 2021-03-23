import { ActionInterface, StateInterface } from '../reducers/ReducerInterfaces'
import Dispatch from 'redux'


interface StoreInterface {
    counterReducer: {
        state: StateInterface,
        action: ActionInterface
    },
    initialState: Object, 


}