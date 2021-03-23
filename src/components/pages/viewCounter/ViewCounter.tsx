import React from 'react'
import { useSelector } from 'react-redux'
import './ViewCounter.scss'
import { StateInterface  } from './ViewCounterInterfaces'

const ViewCounter: React.FC = () => {
    const counter = useSelector<StateInterface, StateInterface>( ( state ) => state )
    return ( 
    <div className="viewContainer" data-testid="viewContainer"> 
        <h1 className="counter">Counter: { counter.counterReducer.counter } </h1> 
    </div> )
}
export default ViewCounter