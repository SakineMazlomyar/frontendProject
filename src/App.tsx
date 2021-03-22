import { Provider } from 'react-redux' 
import { BrowserRouter } from 'react-router-dom'
import Store from './stateManagment/store/Store'
import Routes from './routes'
import Navbar from './components/navbar/Navbar'

const App: React.FC = () => {
  return (
    <Provider store={ Store }>
          <BrowserRouter>
            <Navbar />
            <Routes />  
          </BrowserRouter>
    </Provider>
)}

export default App
