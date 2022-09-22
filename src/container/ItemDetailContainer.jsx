import { useState,useEffect } from 'react';
import React from 'react';
import CardDetail from '../components/CardDetail';
import simulandoPromesa from '../utils/Promesa';
import baseDatos from '../base/baseDatos';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const [datos, setdatos] = useState([]);
    //le doy un numero a la  variable ID.
    const {id} = useParams();
    //monta los componentes,
    useEffect(() => {
        //hago una condiccion que solo me llame a un producto del array dado su id y me los muestre en el DOM
        if (id) {
            //llamo a la promesa y le agrego el array de productos traidos de una base de datos.
            simulandoPromesa(baseDatos.filter(item=>item.id == id)) //usando el metodo filter(), me filtra los datos del array y me trae el elemento que cumpla con la condicion.
            .then (resolve=>setdatos(resolve))
            .catch (error=>console.log(error))
        }
    }, [id]);

    return (
        <div>
            {
                datos.map(elemen => (
                    <CardDetail
                    key={elemen.id}
                    imagen={elemen.image}
                    marca={elemen.name}
                    stock={elemen.quantity}
                    detalle={elemen.description}
                    precio={elemen.precie}
                    />
                ))
            }
        </div>
        
    );
}

export default ItemDetailContainer;
