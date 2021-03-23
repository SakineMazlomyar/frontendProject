
import { render } from '@testing-library/react' 
import ViewCounter from './ViewCounter'
import { Provider } from 'react-redux' 
import Store from '../../../stateManagment/store/Store'

describe( 'View counter component', () => {
    test('should exist', () => {
        const { getByTestId } = render(
            <Provider store={ Store }>
                <ViewCounter />
            </Provider>)
        expect( getByTestId("viewContainer") ).toBeInTheDocument()
    })
})
