import { useState,useEffect } from 'react';
import React from 'react';
import CardDetail from '../components/CardDetail';
import { useParams } from 'react-router-dom';
import { Ring } from '@uiball/loaders';
import simulatorPromises from '../utils/Promesa';
import baseDatos from '../utils/baseDatos';

const ItemDetailContainer = () => {

    const [datos, setdatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {idItem} = useParams();//le doy un numero a la variable ID.

    useEffect(() => {
        
        if (idItem) {
            //con el metodo find me devuelve el producto que cumpla con el id que me envian por parametro
            simulatorPromises(baseDatos.find(item=>item.id===parseInt(idItem)))
            .then(result=>{
                setdatos(result)
                setLoading(false)
            })
        }
    }, [idItem]);

    return (
        <div>
            {
                loading
                ?
                <div className='ring'>
                    <Ring size={70}/>
                </div>
                : 
                <CardDetail
                imagen={datos.image}
                marca={datos.name}
                stock={datos.quantity}
                detalle={datos.description}
                precio={datos.precie}
                objeto={datos}
                />
            }
        </div>
        
    );
}

export default ItemDetailContainer;
