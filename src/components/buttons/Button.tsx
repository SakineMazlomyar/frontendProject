import React from 'react'
import { ButtonInterface } from './ButtonInterfaces'
import  './Button.scss'

const Button: React.FC<ButtonInterface > = ( props ) => 
        <button  
            onClick={ ()=> props.onclick() }  
            className="button"
            data-testid="button"> 
            <span className="buttonLabel"> { props.label } </span>
        </button>

export default Button 