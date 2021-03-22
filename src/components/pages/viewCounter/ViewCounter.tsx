import { useSelector } from 'react-redux'
import './ViewCounter.scss'
import { StateInterface  } from './ViewCounterInterfaces'

const ViewCounter = () => {
    const counter = useSelector( ( state: StateInterface  ) => state.counterReducer.counter )
    return ( 
    <div className="viewContainer"> 
        <h1 className="counter">Counter: { counter} </h1> 
    </div> )
}
export default ViewCounter