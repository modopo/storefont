import './App.css';
import { Provider } from 'react-redux';
import createStore from './store';
import Header from './Components/Header';
import Categories from './Components/Categories';
import ActiveCategory from './Components/ActiveCategory';


function App() {
  return (
    <Provider store={createStore()}>
      <div className="App">
        <Header />
        <Categories />
        <ActiveCategory />
      </div>
    </Provider>

  );
}

export default App;
