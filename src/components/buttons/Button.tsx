import { ButtonProps } from './ButtonInterfaces'
import  './Button.scss'

const Button = ( props: ButtonProps ) => 
        <button  onClick={ ()=> props.onclick() }  className="button"> 
            <span className="buttonLabel"> { props.label } </span>
        </button>

export default Button 