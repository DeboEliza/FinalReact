import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({prod}) => {
    //renderizado en el DOM de los productos
    return (
        <Link to={`/item/${prod.id}`}>
        <article className="card">
            <img src={prod.img} alt={prod.title}/>
            <div className="card-info">
                <h2>{prod.title}</h2>
                <h4>${prod.price}</h4>
                <h5>{prod.category}</h5> 
            </div>
        </article>
        </Link>
    );
};

export default Item;