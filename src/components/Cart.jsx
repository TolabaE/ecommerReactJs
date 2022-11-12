import React from 'react';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import CartDetail from './CartDetail'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Cart = () => {

    const {carrito,clearAll,sumaTotal} = useContext(CartContext);

    const createOrder = ()=>{

        clearAll();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Compra finalizada',
            showConfirmButton: false,
            timer: 2000
        });
    }
    
    if(carrito.length===0){
        return(
            <div className='container-cart-vacio'>
                <h1 className='title-cart-vacio'>Tu carrito esta vacio</h1>
                <img className='picture-cart-vacio' src="https://paisajesespanoles.es/images/emptycart.png" alt="un carrito vacio" />
            </div>
        ) 
    }

    return (
        <>
            <h2 className='titleCart'>Carrito de Compras</h2>
            <button className='btn-primary btn-vaciar-cart' onClick={clearAll}>Vaciar Carrito</button>
            <div className='container-cart-detail'>
                <div>
                    <h5>producto</h5>
                </div>
                <div>
                    <h5>nombre</h5>
                </div>
                <div>
                    <h5>detalle</h5>
                </div>
                <div>
                    <h5>cantidad</h5>
                </div>
                <div>
                    <h5>total</h5>
                </div>
                <div>
                    
                </div>
            </div>
            {
                carrito.map(item =>(        
                    <CartDetail
                    key={item.id}
                    img={item.image}
                    nombre={item.name}
                    detalle={item.description}
                    cantidad={item.cantidad}
                    total={item.cantidad*item.precie}
                    eliminar={item.id}
                    />
                ))
            }
            <div className='caja-factura-cart'>
                <div className='caja-envio'>
                    <h5>Entrega</h5>
                    <p>Los envios son de lunes a viernes de 10 a 18 hs.</p>
                    <Link className='link-volver' to="/category/10">Seguir Comprando</Link>
                </div>
                <div className='caja-comprar-dos'>
                    <p>subtotal: ${sumaTotal()}</p>
                    <p>precio total: ${sumaTotal()} </p>
                    <button onClick={createOrder} className='div-checkout btn bg-primary'>Finalizar Compra</button>
                </div>
            </div>
        </>
    );
}

export default Cart;
