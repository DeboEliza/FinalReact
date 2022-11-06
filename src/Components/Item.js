import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({prod}) => {
    
    return (
        <main>
        <article className="card">
            <img  src={prod.img} alt={prod.title}/>
            <div className="card-info">
                <h2>{prod.title}</h2>
                <h4>${prod.price}</h4>
                <h5>{prod.category}</h5> 
            </div>
            <Link to={`/item/${prod.id}`} className= "botonDetalle">Detalle</Link>
        </article>
       </main>
    );
};

export default Item;