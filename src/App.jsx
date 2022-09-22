import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Products from './container/Products';
import ItemDetailContainer from './container/ItemDetailContainer';
import HomeContainer from './container/HomeContainer';
import Contacto from './pages/Contacto';
import Cart from './components/Cart';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomeContainer/>}/>
          <Route path='/category/:id' element={<Products/>}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/carrito' element={<Cart/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
