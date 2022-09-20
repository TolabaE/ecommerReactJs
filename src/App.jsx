import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Products from './container/Products';
import ItemDetailContainer from './container/ItemDetailContainer';
import HomeContainer from './container/HomeContainer';
import Contacto from './pages/Contacto';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomeContainer/>}/>
          <Route path='/product' element={<Products/>}/>
          <Route path='/detail' element={<ItemDetailContainer/>}/>
          <Route path='/contact' element={<Contacto/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
