import { actionNames } from './ActionNames'
import { DispatchInterFace  } from './ActionInterfaces'

 /**
  * Returns the increment counter action
  * @param {Dispatch}
  * @returns {object}
  */
export const counterIncrement = () => ( dispatch: ( Dispatch: DispatchInterFace ) => DispatchInterFace  ) => {
    return dispatch({
        type: actionNames.INCREMENT_NUMBER
    })  
}  