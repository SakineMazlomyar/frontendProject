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
            className="button"
            data-testid="button"
            style={{backgroundColor:props.color}}> 
            <span className="buttonLabel" data-testid="label"> { props.label } </span>
        </button> )
}

export default Button 