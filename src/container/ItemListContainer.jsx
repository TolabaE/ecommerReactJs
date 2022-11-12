import { useState,useEffect} from 'react';
import React from 'react';
import Card from '../components/card';
import { NavLink, useParams } from 'react-router-dom';
import { Ring } from '@uiball/loaders';
import simulatorPromises from '../utils/Promesa';
import baseDatos from '../utils/baseDatos';


const ItemListContainer = () => {

    const [datos, setdatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {idCategory} = useParams();

    useEffect(() => {
        
        setLoading(true)
        if (idCategory) {
            //hago un filtrado de los datos de acuerdo a la categoria que me envian por parametro.
            simulatorPromises(baseDatos.filter(items=>items.category ===parseInt(idCategory)))
            .then(result=>{
                setdatos(result)
                setLoading(false)
            })
        }
    }, [idCategory]);
    return (
        <div className='conteiner-products'>
            {
            loading? 
            <div className='ring-product'>
                <Ring size={80}/>
            </div>
            : datos.map((elemento) => (
                <Card
                    key={elemento.id}
                    imagen={elemento.image}
                    marca={elemento.name}
                    modelo={elemento.precie}
                    detalle={<NavLink className="card-link" to={`/detalle/${elemento.id}`}>Comprar</NavLink>}
                    //el navlink recibe como paramtro el id del producto y al hacer click,lo lleva al detalle del producto que alla seleccionado.
                />
            ))
        }
        </div>
    );
}

export default ItemListContainer;
