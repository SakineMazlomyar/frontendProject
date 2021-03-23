import { actionNames } from './ActionNames'
import { DispatchInterFace } from './ActionInterfaces'
 /**
  * Returns the increment counter action
  * @returns {object}
  */
export const counterIncrement = () =>  {
    const payload:DispatchInterFace = {
        type: actionNames.INCREMENT_NUMBER
    }

    return payload
}  