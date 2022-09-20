
const Navbar =()=>{
    return(
        <>
            <nav className="container-navbar bg-dark">
                <div className="box-logo">
                    Phone Store
                </div>
                <div className="container-list-father">
                    <ul className="container-list-children">
                        <li>
                            <a href="/">Inicio</a>
                        </li>
                        <li><a href="/product">Iphone</a></li>
                        <li><a href="/detail">Detalle</a></li>
                        <li>Otros</li>
                        <li><a href="/contact">Contacto</a></li>
                    </ul>
                </div>
                <div className="container-carrito">
                    <img className="bag" src="https://img.icons8.com/ios/40/000000/shopping-bag--v1.png" alt="carrito"/>
                </div>
            </nav>
        </>
    );
}
export default Navbar;