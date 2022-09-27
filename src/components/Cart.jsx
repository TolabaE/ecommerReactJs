import React from 'react';
import { CartContext } from './CartContext';
import { useContext } from 'react';

const Cart = () => {

    const {carrito,clearAll,removeItem,sumaTotal} = useContext(CartContext);

    if(carrito.length===0){
        return(
            <>
            <p>carrito vacio</p>
            </>
        )
    }

    return (
        <>
            <h2>Carrito de Compras</h2>
            <button className='btn-primary' onClick={clearAll}>Vaciar Carrito</button>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">producto</th>
                <th scope="col">nombre</th>
                <th scope="col">detalle</th>
                <th scope="col">cantidad</th>
                <th scope="col">total</th>
                </tr>
            </thead>
            {
                carrito.map(item=>(        
                    <tbody key={item.id}>
                        <tr>
                            <td><img className='img-cart' src={item.image} alt="" /></td>
                            <td>{item.name} </td>
                            <td>{item.description}</td>
                            <th scope="row">{item.cantidad}</th>
                            <td>$ {item.cantidad*item.precie}</td>
                            <div>
                                <button className='btn btn-danger' onClick={()=>{removeItem(item.id)}}>eliminar</button>
                            </div>
                        </tr>
                    </tbody>
                ))
            }
            </table>
            <div className='container-detail-cart'>
                <div>
                    <div>
                        <h5>Entrega</h5>
                        <p>Los envios se realiza de lunes a viernes en horario de 10 a 18 hs</p>
                    </div>
                    seguir comprando
                </div>
                <div>
                    <p>subtotal</p>
                    <p>precio total ${sumaTotal()} </p>
                    <div>Finalizar Compra</div>
                </div>
            </div>
        </>
    );
}

export default Cart;
