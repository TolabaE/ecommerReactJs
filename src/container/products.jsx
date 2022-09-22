import { useState,useEffect} from 'react';
import React from 'react';
import Card from '../components/Card';
import simulandoPromesa from '../utils/Promesa';
import baseDatos from '../base/baseDatos';
import { NavLink, useParams } from 'react-router-dom';

const Products = () => {

    const [datos, setdatos] = useState([]);

    const { id } = useParams();//es un parametro que viene con react-router-dom.
    //monta los componentes,
    useEffect(() => {
        //si no me envian un ID con el numero de categoria,traigo todos los productos de la base de datos.
        //sino me trae los productos que cumplan con esa categoria.
        if (id) {
            //llamo a la promesa y le agrego el array de productos traidos de una base de datos,usando el metodo .find()
            simulandoPromesa(baseDatos.filter(prod=>prod.category==id))
            .then (resolve=>setdatos(resolve))
            .catch (error=>console.log(error))
        }else{
            simulandoPromesa(baseDatos)
            .then (resolve=>setdatos(resolve))
            .catch (error=>console.log(error))
        }
    }, [id]);
    return (
        <>
            <div className='conteiner-products'>
                {
                datos.map((elemento) => (
                <Card
                    key={elemento.id}
                    imagen={elemento.image}
                    marca={elemento.name}
                    detalle={<NavLink to={`/detalle/${elemento.id}`}>Ver mas</NavLink>}
                    //el navlink recibe como paramtro el id del producto y al hacer click,lo lleva al detalle del producto que alla seleccionado.
                />
                ))
            }
            </div>
        </>
    );
}

export default Products;
