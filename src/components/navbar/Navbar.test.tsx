import Navbar from './Navbar'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure( { adapter: new Adapter() } ) 

describe('Navbar component', () => {

    test('shoud exist', () => {
        // In ordr to get this compnent as unit we use shallow.
        const navbar = shallow( <Navbar /> )
        expect( navbar.find('navbar') ).toBeTruthy()
    })

})
