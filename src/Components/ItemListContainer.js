import React,{useEffect,useState} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs,query, where} from 'firebase/firestore';
import {miBaseDeDatos} from './FireBase';

const ItemListContainer = ({greeting}) => {
    const[items,setItems] = useState([]);
    const[cargando,setCargando] = useState (true);

    const {idCategory} = useParams();
    
    useEffect(() => {
       const indumentariaFirebase = collection (miBaseDeDatos,'productos' );
       const miReferencia = idCategory ? query(indumentariaFirebase, where('category', '==', idCategory)) : indumentariaFirebase;

          getDocs (miReferencia)
          .then ((res) => {
            const indumentaria = res.docs.map ((prod) =>{
                return {
                    id: prod.id,
                    ...prod.data(),
                };
            });
            setItems(indumentaria);
          })

          .catch ((error) =>{
             console.log (error);
          })

          .finally (() => {
            setCargando(false);
          })
       return () => setCargando (true);   

    },[idCategory]);

   return (
        <main>
            {
                cargando ? (
                    <h1>Cargando...</h1>
                ) :(
                <div>
                   <h1 style={{"color": "red", "fontSize":"40px", "paddingleft":"50px"}}>{greeting} </h1>
                   <ItemList items={items}/>
                </div> 
            )
            }
                           
        </main>
    );
};

export default ItemListContainer;