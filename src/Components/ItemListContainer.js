import React,{useEffect,useState} from "react";
import ItemList from "./ItemList";
import {products} from '../Mock/ProducMock';
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const[items,setItems] = useState([]);

    const {idCategory} = useParams();
    
    useEffect(() => {
        const misProductos = () => {
            return new Promise ((res,rej) => {
                const prodFiltrados = products.filter(
                    (prod) => prod.category === idCategory
                );
                const prod = idCategory ? prodFiltrados : products;
                setTimeout (()=>{
                     res(prod) ;                     
                },1000);
            });
        };
        misProductos ()
            .then((res) =>{
               setItems(res);
           })
            .catch((error)=>{
               console.log(error);
            })
    },[idCategory]);

  return (
        <main>
            <div>
                <h1 style={{"color": "yellow", "fontSize":"40px", "paddingleft":"50px"}}>{greeting} </h1>
                <ItemList items={items}/>
            </div>
        </main>
    );
};

export default ItemListContainer;