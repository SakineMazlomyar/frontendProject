import Button from './Button'
import { ButtonInterface } from './ButtonInterfaces'
import { render } from '@testing-library/react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure( { adapter: new Adapter() } ) 

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

    test( 'stimulate the dispatch count increment when it is called once', () => {
        const component = shallow( <Button {...props} /> )
        component.find( 'button' ).simulate( 'click' )
        expect( props.onclick).toBeCalled()
    })
})


  