import { actionNames } from './ActionNames'

 /**
  * Returns the increment counter action
  * @returns {object}
  */
export const counterIncrement = () =>  {
    return {
        type: actionNames.INCREMENT_NUMBER
    }
}  