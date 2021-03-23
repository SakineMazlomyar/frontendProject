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
                data-testid="button"> 
                <span className="buttonLabel"> { props.label } </span>
            </button> )
}


export default Button 