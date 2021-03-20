import { Provider } from 'react-redux' 
import Store from './store/Store'
import Routes from './routes/index'
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
