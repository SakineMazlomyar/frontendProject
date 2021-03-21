import { Provider } from 'react-redux' 
import Store from './stateManagment/store/Store'
import Routes from './routes'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <Provider store={ Store }>
        <div className="app">
          <Navbar />
          <Routes />  
        </div>
    </Provider>
  );
}

export default App;
