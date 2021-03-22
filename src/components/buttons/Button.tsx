import React from 'react'
import { ButtonInterface } from './ButtonInterfaces'
import  './Button.scss'

const Button: React.FC<ButtonInterface> = ( props ) => 
        <button  
            onClick={ ( e )=> props.onclick(e) }  
            className="button"
            data-testid="button"> 
            <span className="buttonLabel"> { props.label } </span>
        </button>

export default Button 