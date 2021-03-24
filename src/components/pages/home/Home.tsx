import React from 'react'
import { useDispatch, } from 'react-redux'
import { counterIncrement } from '../../../stateManagment/actions/CounterActions'
import { Dispatch } from "redux"
import Button from '../../buttons/Button'
import './Home.scss'

const Home : React.FC = () => {

    const dispatch = useDispatch<Dispatch<{ type:string }>>()
    return (
        <div className="buttonContainer">
            <Button onclick={ ()=> dispatch( counterIncrement() ) } label="+" color="#000000" />
        </div> )
}

export default Home