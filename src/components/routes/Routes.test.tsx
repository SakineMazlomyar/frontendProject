import Routes  from './index'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { render } from 'react-dom'
import { createMemoryHistory } from "history"
import App from '../app/App'
import { Router } from 'react-router'

configure( { adapter: new Adapter() } ) 

describe( 'Routes', () => {

    test('shoud exist', () => {
        const navbar = shallow( <Routes /> )
        expect( navbar.find('navbar') ).toBeTruthy()
    })
    
    const root = document.createElement('div')
    document.body.appendChild( root )

    test( 'should find correct path for counter page', () => {
        const history = createMemoryHistory( { initialEntries: ['/counter'] } )
        render( 
            <Router history={ history }>
                <App  />
            </Router>, root )

        expect( history.location.pathname ).toBe( "/counter" )   
    })
})
