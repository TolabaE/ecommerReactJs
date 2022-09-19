import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Products from './container/Products';
import ItemDetailContainer from './container/ItemDetailContainer';


function App() {
  return (
    <>
      <Navbar/>
      <ItemDetailContainer/> 
      {/* <Products/> */}
      <Footer/>
    </>
  );
}

export default App;
