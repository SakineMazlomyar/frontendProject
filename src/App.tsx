import React from 'react'
import { Provider } from 'react-redux' 
import Store from './stateManagment/store/Store'
import Routes from './routes'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <Provider store={ Store }>
          <React.Fragment>
            <Navbar />
            <Routes />  

          </React.Fragment>
    </Provider>
)}

export default App;
