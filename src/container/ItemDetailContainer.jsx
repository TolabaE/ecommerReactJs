import { useState,useEffect } from 'react';
import React from 'react';
import CardDetail from '../components/CardDetail';
import { useParams } from 'react-router-dom';
import { Ring } from '@uiball/loaders';
import { collection, getDocs,query,where} from "firebase/firestore";
import { db } from '../utils/firebaseConfig';

const ItemDetailContainer = () => {

    const [datos, setdatos] = useState([]);
    const [loading, setLoading] = useState(true);
    //le doy un numero a la  variable ID.
    const {idItem} = useParams();

    useEffect(() => {
        
        const  firestoreFetch = async ()=>{

            let q
            if (idItem) {
                q = query(collection(db, "products"),where('id','==',parseInt(idItem)))
            }
            
            const querySnapshot = await getDocs(q)
            const dataFromFirestore = querySnapshot.docs.map((document) => ({
                ...document.data()
            }));
            return dataFromFirestore;
        }
        
        firestoreFetch()
            .then(result=>{
                setdatos(result)
                setLoading(false)
            })
    }, [idItem]);

    return (
        <div>
            {
                loading
                ?
                <div className='ring'>
                    <Ring size={70}/>
                </div>
                
                : datos.map(elemen => (
                    <CardDetail
                    key={elemen.id}
                    imagen={elemen.image}
                    marca={elemen.name}
                    stock={elemen.quantity}
                    detalle={elemen.description}
                    precio={elemen.precie}
                    objeto={elemen}
                    />
                ))
            }
        </div>
        
    );
}

export default ItemDetailContainer;
