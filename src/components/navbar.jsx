import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const Navbar =()=>{

    const {sumaCantidad}= useContext(CartContext);

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
                    <Link to="/carrito"><BsCart3 className="icons"/></Link>
                    <p hidden={sumaCantidad()===0} className="icono-cart-cantidad">{sumaCantidad()}</p>
                </div>
            </nav>
        </>
    );
}
export default Navbar;