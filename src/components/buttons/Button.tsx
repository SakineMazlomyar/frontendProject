import React from 'react'
import { ButtonInterface } from './ButtonInterfaces'
import  './Button.scss'

const Button: React.FC<ButtonInterface> = ( props ) => {

    const handleOnclick = ( event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
        event.preventDefault()
        props.onclick()
    }

    return( <button  
            onClick={ handleOnclick }  
            className="buttonIncrement"
            data-testid="button-increment"
            style={{ backgroundColor:props.color }}> 
            <span className="labelIncrement " data-testid="label-increment"> { props.label } </span>
        </button> )
}

export default Button 