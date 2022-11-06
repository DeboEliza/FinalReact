import React,{useEffect,useState} from "react";
import ItemDitale from "./ItemDitale";
import { useParams } from "react-router-dom";
import { collection,doc, getDoc } from "firebase/firestore";
import { miBaseDeDatos } from "./FireBase";

const ItemDitaleContainer = () =>{
    const [ item, setItem ] = useState({});
  
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
    },[id]);

  return (
        <div>
         <ItemDitale item={item}/>
         </div>
    );
};

export default ItemDitaleContainer;