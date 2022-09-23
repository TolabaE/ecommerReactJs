import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useState } from 'react';
import Swal from 'sweetalert2';
const CardDetail = ({imagen,marca,detalle,precio,stock}) => {
    
    //la funcion addCart viene con un parametro(number),a ese parametro le pasamos como un estado de setvariable y permite cambiarlo
    const addCart=(number)=>{

        setvariable(number)

        Swal.fire(
            'Listo',
            'Producto agregado al carrito',
            'success'
        )
    }
    const [variable, setvariable] = useState(0);

    return (
        <div className='container-detail'>
            <div className='container-picture-detail'>
                <img className='box-img-detailcard' src={imagen} alt="description of imagen"/>
            </div>
            <div className='container-children-detail'>
                <h2>{marca}</h2>
                <h3>{detalle}</h3>
                <p>stock:{stock} unidades</p>
                <p className='text-precie'>$ {precio}</p>
                <p>+ Consulte la garantia de su dispositivo </p>
                <p>+ Los telefonos incluye cargador y cable</p>
                <p>+ Tomamos tu usado como parte de pago</p>
                {
                    variable===0
                    ? <ItemCount
                    stock={stock}
                    addCart={addCart} //paso como parametro una funcion que se ejecuta, en CardDetail.
                    />
                    :<Link to="/carrito">Ver carrito</Link>
                }
            </div>
        </div>
    );
}

export default CardDetail;
