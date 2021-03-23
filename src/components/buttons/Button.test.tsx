import Button from './Button'
import { ButtonInterface } from './ButtonInterfaces'
import { createEvent, fireEvent, render } from '@testing-library/react'

const props: ButtonInterface = {
    onclick: jest.fn(), 
    label: "Increment", 
    color: "#B0D41E"
}

describe( 'Button component', () => {

    test('should be in the document element', () => {
        const { getByTestId } =  render(<Button {...props} />)
        expect( getByTestId('button') ).toBeInTheDocument()
    })

    test( 'Dispatch count increment when it is called once and prevent the default event from occuring', () => {
        const { getByTestId } = render( <Button {...props} /> )
        const keyDownEvent = createEvent.keyDown( getByTestId( 'button' ) )

        fireEvent( getByTestId('button'), keyDownEvent )
        expect( keyDownEvent.defaultPrevented ).toBe( false );

    })
})


  