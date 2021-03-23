import configureMockStore from 'redux-mock-store'
import { counterIncrement } from '../../../stateManagment/actions/CounterActions'

import thunk from 'redux-thunk'
const middleWare = [ thunk ]

const mockStore = configureMockStore( middleWare )

describe('Home component', () => {
   
    test('should call the right action ', () => {
        const store = mockStore( { counter: 0 } )
        store.dispatch( counterIncrement())
        expect( store.getActions() ).toEqual( [{ type: 'INCREMENT_NUMBER'}] )
    })

})