import './App.css';
import Navbar from './components/navbar';
import Cardhome from './components/cardhome';
import Intro from './components/intro';
import Footer from './components/footer';
import Infocard from './components/infocard';
import Products from './container/products';

function App() {
  return (
    <>
      <Navbar/>
      <Cardhome/>
      <Intro/>
      <Products/>
      <Infocard/>
      <Footer/>
    </>
  );
}

export default App;
