import React from 'react'
import { useDispatch } from 'react-redux'
import { counterIncrement } from '../../../stateManagment/actions/CounterActions'
import Button from '../../buttons/Button'
import './Home.scss'


const Home : React.FC = () => {
    const dispatch = useDispatch()
    return (
        <div className="buttonContainer">
            <Button onclick={ () => dispatch( counterIncrement() ) } label="Increment" color="#B0D41E" />
        </div> )
}
export default Home