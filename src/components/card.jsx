import React from 'react';

const Card = ({marca,modelo,precio,imagen}) => {

    return (
        <>
            <div className='conteiner-phone'>
                <div>
                    <img src={imagen} alt="descrition picture" className='box-img' />
                </div>
                <div className='container-detall-card'>
                    <h3>{marca}</h3>
                    <h5>{modelo}</h5>
                    <p>USD {precio}</p>
                </div>
            </div>
        </>
    );
}

export default Card;
