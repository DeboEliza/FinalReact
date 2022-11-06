import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import ItemDitaleContainer from './Components/ItemDitaleContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CardWidget from './Components/CardWidget';
import Provider from './Context/CartContext';
import Cart from './Components/Cart';
import Form from './Components/Form';

function App() {
  return (
    <Provider>
    <BrowserRouter>
     
        <header className="App-header">
          <NavBar/>
        </header>
          <Routes>
              <Route path='/' element={<ItemListContainer  greeting='Bienvenido!'/>}/>
              <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
              <Route path= '/item/:id' element={<ItemDitaleContainer/>}/>
              <Route path='/CardWidget' element={<CardWidget/>}/>
              <Route path='/Cart' element={<Cart/>}/>
              <Route path='/Checkout' element={<Form/>}/>
          </Routes>
        
      <Footer/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
