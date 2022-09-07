import './App.css';
import Navbar from './components/navbar';
import Cardhome from './components/cardhome';
import Intro from './components/intro';
import Footer from './components/footer';
import Infocard from './components/infocard';

function App() {
  return (
    <>
      <Navbar/>
      <Cardhome/>
      <Intro/>
      <Infocard/>
      <Footer/>
    </>
  );
}

export default App;
