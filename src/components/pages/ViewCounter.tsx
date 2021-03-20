import { useSelector } from 'react-redux'
import './ViewCounter.scss'
interface CounterReducr {
    counter: Number
}
interface State {
    counterReducer: CounterReducr
}
const ViewCounter = () => {
    const counter = useSelector( ( state: State ) => state.counterReducer.counter )
    return ( 
    <div className="viewContainer"> 
        <h1 className="counter">Counter: { counter} </h1> 
    </div> )
}
export default ViewCounter