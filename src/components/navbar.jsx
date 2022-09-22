import { Link } from "react-router-dom";
const Navbar =()=>{
    return(
        <>
            <nav className="container-navbar">
                <div className="box-logo">
                    <Link className="link-nab-log" to="/">Phone Store</Link>
                </div>
                <div className="container-list-father">
                    <ul className="container-list-children">
                        <li>
                            <Link className="link-nab" to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link className="link-nab" to="/category/10">Iphone</Link>
                        </li>
                        <li>
                            <Link className="link-nab" to="/category/15">Samsung</Link>
                        </li>
                        <li>
                            <Link className="link-nab" to="/category/5">Otros</Link>
                        </li>
                        <li>
                            <Link className="link-nab" to="/contacto">Contacto</Link>
                        </li> 
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