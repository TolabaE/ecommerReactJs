import React from 'react';
import { NavLink } from 'react-router-dom';


const Card = ({marca,modelo,imagen,detalle}) => {

    return (
        <>
            <div className='conteiner-phone'>
                <div>
                    <img src={imagen} alt="descrition picture" className='box-img' />
                </div>
                <div className='container-detall-card'>
                    <h3>{marca}</h3>
                    <h5>{modelo}</h5>
                    <p className='parraf-card-link'>{detalle}</p>
                </div>
            </div>
        </>
    );
}

export default Card;
