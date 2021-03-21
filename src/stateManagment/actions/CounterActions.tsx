import { actionNames } from './ActionNames'
import { Dispatch } from './ActionInterfaces'

 /**
  * Increments the number
  * @param {Dispatch}
  * @returns {Objet}
  */
export const incrementNumber = () => ( dispatch: ( Arguments: Dispatch ) => Dispatch ) => {
    return dispatch({
        type: actionNames.INCREMENT_NUMBER
    })  
}  