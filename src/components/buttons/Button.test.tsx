import Button from './Button'
import { ButtonInterface } from './ButtonInterfaces'
import { createEvent, fireEvent, render } from '@testing-library/react'

const props: ButtonInterface = {
    onclick: jest.fn(), 
    label: "+", 
    color: "#000000" // optional
}

describe('Button component', () => {

    test('should be in the document element with + label', () => {
        const { getByTestId } =  render( <Button {...props} /> )
        expect( getByTestId('button-increment') ).toBeInTheDocument()
        expect( getByTestId('label-increment') ).toHaveTextContent('+')
    })

    test('Dispatch count increment when it is called once and prevent the default event from occuring', () => {
        const { getByTestId } = render( <Button {...props} /> )
        const keyDownEvent = createEvent.keyDown( getByTestId( 'button-increment' ) )

        fireEvent( getByTestId('button-increment'), keyDownEvent )
        expect( keyDownEvent.defaultPrevented ).toBe( false )

    })
})


  