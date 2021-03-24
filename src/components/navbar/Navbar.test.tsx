import Navbar from './Navbar'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json';

configure( { adapter: new Adapter() } ) 

describe('Navbar component', () => {

    test('shoud exist and match the snapshot', () => {
        const wrapper = shallow( <Navbar /> );
         expect( toJson( wrapper ) ).toMatchSnapshot();
    })
})
