import { actionNames } from './ActionNames'
import { DispatchInterFace  } from './ActionInterfaces'

 /**
  * Returns the increment counter action
  * @returns {object}
  */
export const counterIncrement = () =>  {
    return {
        type: actionNames.INCREMENT_NUMBER
    }
}  