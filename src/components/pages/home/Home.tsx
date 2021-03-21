import { useDispatch } from 'react-redux'
import { incrementNumber, decrementNumber } from '../../../stateManagment/actions/CounterActions'
import Button from '../../buttons/Button'
import './Home.scss'

const Home = () => {
    const dispatch = useDispatch()
    return (
        <div className="buttonContainer">
            <Button onclick={ () => dispatch( incrementNumber() ) } label="Increment" color="#B0D41E"/>
            <Button onclick={ () => dispatch( decrementNumber() ) } label="Decrement" color="#D41E1E"/> 
        </div> )
}
export default Home