import React from 'react';
import { useState } from 'react';

const Card = ({marca,modelo,precio,imagen}) => {

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
        <>
            <div className='conteiner-phone'>
                <div className='conteiner-picture'>
                    <img src={imagen} alt="descrition picture" className='box-img' />
                </div>
                <div>
                    <h3>{marca}</h3>
                    <h5>{modelo}</h5>
                    <p>USD {precio}</p>
                    <p>cantidad</p>
                    <div className='box-button'>
                        <button onClick={addNumber}>+</button>
                        <div className='box-cantidad'>{number}</div>
                        <button onClick={reduceNumber}>-</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
