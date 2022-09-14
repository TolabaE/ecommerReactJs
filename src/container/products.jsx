import { useState,useEffect } from 'react';
import React from 'react';
import Card from '../components/card';
import simulandoPromesa from '../utils/Promesa';
import baseDatos from '../base/baseDatos'

const Products = () => {

    const [datos, setdatos] = useState([]);
    //monta los componentes,
    useEffect(() => {
        //llamo a la promesa y le agrego el array de productos traidos de una base de datos.
        simulandoPromesa(baseDatos)
        .then (resolve=>setdatos(resolve))
        .catch (error=>console.log(error))
    }, []);
    
    return (
        <>
            <div className='conteiner-products'>
                    {
                    datos.map((elemento) => (
                        <Card
                        key={elemento.id}
                        imagen={elemento.image}
                        marca={elemento.name}
                        modelo={elemento.description}
                        precio={elemento.precie}/>
                        
                    ))
                    
                }
            </div>
        </>
    );
}

export default Products;
