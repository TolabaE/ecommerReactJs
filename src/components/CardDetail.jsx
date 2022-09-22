import React from 'react';
import { useState } from 'react';
const CardDetail = ({imagen,marca,detalle,precio,stock}) => {

    const [number, setstate] = useState(1);
    const addNumber=()=>{
        if (number<5) {
            setstate(number+1);
        }
    }
    const reduceNumber=()=>{
        if (number>1) {
            setstate(number-1);
        }
    }

    return (
        <div className='container-detail'>
            <div className='container-picture-detail'>
                <img className='box-img-detailcard' src={imagen} alt="description of imagen"/>
            </div>
            <div className='container-children-detail'>
                <h2>{marca}</h2>
                <h3>{detalle}</h3>
                <p>stock:{stock} u/disponibles</p>
                <p>USD {precio}</p>
                <p>cantidad</p>
                <div className='box-button-father'>
                    <div className='box-button'>
                        <button onClick={addNumber}>+</button>
                        <div className='box-cantidad'>{number}</div>
                        <button onClick={reduceNumber}>-</button>
                    </div>
                    
                </div>
                <p>+ Consulte la garantia de su dispositivo </p>
                <p>+ Los telefonos incluye cargador y cable</p>
                <p>+ Tomamos tu usado como parte de pago</p>
                <div>
                    <button className='btn btn-danger'>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default CardDetail;
