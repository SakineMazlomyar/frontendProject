import { actionNames } from './ActionNames'
import { Dispatch } from './ActionInterfaces'

 /**
  * Increments the number
  * @param {Dispatch}
  * @returns {Objet}
  */
export const counterIncrement = () => ( dispatch: ( Arguments: Dispatch ) => Dispatch ) => {
    return dispatch({
        type: actionNames.INCREMENT_NUMBER
    })  
}  