import React from 'react';
import { serverTimestamp,doc, setDoc, collection,updateDoc, increment } from 'firebase/firestore';
import {db}  from '../utils/firebaseConfig';

const Utilsfirebase = () => {

    //esta funcion se ejecuta al hacer click en finalizar compra.
    const createOrder =async()=>{

        let itemsForDB=carrito.map(item=>({
            id:item.id,
            precie:item.precie,
            title:item.name,
            quantity:item.cantidad,
        }))
        
        let order ={
            cliente:{
                name:"Juan Perez",
                email: "perezcosta@gail.com",
                phone: 11309485820
            },
            date:serverTimestamp(),
            items:itemsForDB,
            total: sumaTotal(),
        }

        //le genera un id en la base de datos,el collection hace que se ejecute en orden la funcion asincronica.
        const newOrderRef =doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);// crea la orden en la base de datos

        carrito.forEach( async (item) => {
            //actualiza el stock de la base de datos en firestore.
            const stockRef = doc(db, "products",item.id);
            
            await updateDoc(stockRef, {
                quantity: increment(-item.cantidad)
            });
        });
        
        clearAll()

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Listo! Gracias por su compra',
            showConfirmButton: false,
            timer: 2000
        })
    }

    return (
        <div>
            
        </div>
    );
}

export default Utilsfirebase;
