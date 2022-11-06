import React,{useEffect,useState} from "react";
import ItemDitale from "./ItemDitale";
import { useParams } from "react-router-dom";
import { collection,doc, getDoc } from "firebase/firestore";
import { miBaseDeDatos } from "./FireBase";

const ItemDitaleContainer = () =>{
    const [ item, setItem ] = useState({});
    const[cargando,setCargando] = useState (true);
  
     const { id }= useParams ();
    
    useEffect(() => {
        const indumentariaFirebase = collection (miBaseDeDatos,'productos')
        const refDeMiLista = doc(indumentariaFirebase, id );
        
        getDoc (refDeMiLista)
        .then ((res)=> {
            setItem ({
                id: res.id,
                ...res.data(),
            })
        })
        .catch((error) => {
            console.log(error)
        })
        .finally (() => {
            setCargando(false);
          })
       return () => setCargando (true); 
    },[id]);

  return (
       <main>
           {
            cargando ? (
                    <h1 style={{"textAlign":"center", "fontSize" : "30px"}} >Cargando...</h1>
            ) :(
                <div>
                    <ItemDitale item={item}/>
                </div>
            )
         }
        </main>
    );
};

export default ItemDitaleContainer;