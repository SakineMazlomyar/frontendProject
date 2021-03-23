import React from 'react'
import { Provider } from 'react-redux' 
import { BrowserRouter } from 'react-router-dom'
import Store from './stateManagment/store/Store'
import Routes from './routes'
import Navbar from './components/navbar/Navbar'

const App: React.FC = () => {
  return (
    <Provider store={ Store }>
        <div data-testid="app">
          <BrowserRouter>
            <Navbar />
            <Routes />  
          </BrowserRouter>
        </div>
    </Provider>
)}

export default App
