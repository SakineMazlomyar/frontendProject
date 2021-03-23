import NofoundPage from './404'
import { render } from '@testing-library/react'

describe('notFoundPage  component', () => {
   
    test('should exit', () => {
        const { getByTestId } =  render( <NofoundPage/> )
        expect( getByTestId( 'notFoundPage' ) ).toBeInTheDocument()
    })

})