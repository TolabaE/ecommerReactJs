//la condicion sea verdadera y me devuelva la promesa.
let is_ok = true;

// Creo una promesa simulando traer un array desde el back-end que tarde 2 segundos.
const simulandoPromesa = (array) => {

    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            if (is_ok) {
                resolve(array)
            }else{
                reject("promesa no resulta");
            }
        }, 2000);
    })
}

export default simulandoPromesa;
