import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className='caja-logos'>
          <div>
            <img src="https://img.icons8.com/windows/32/000000/google-web-search.png" alt=''/>
          </div>
          <div className='logo-nav'>
            Phone Store
          </div>
          <div className='logo-carrito'>
            <img src="https://img.icons8.com/ios/30/000000/buy--v1.png" alt=''/>
          </div>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>IPhone</li>
            <li>Samsung</li>
            <li>Otros</li>
            <li>Contactos</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
