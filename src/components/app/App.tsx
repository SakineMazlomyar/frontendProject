import React from 'react'
import { Provider } from 'react-redux' 
import { BrowserRouter } from 'react-router-dom'
import Store from '../../stateManagment/store/Store'
import Routes from '../routes'
import Navbar from '../navbar/Navbar'
import './App.scss'

const App: React.FC = () => {

    return ( <Provider store={ Store }>
                <div className="app" data-testid="app">
                    <BrowserRouter>
                        <Navbar />
                        <Routes />  
                    </BrowserRouter>
                </div>
            </Provider> )
}

export default App
