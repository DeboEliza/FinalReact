import React from 'react';
import Item from './Item';
import './ItemList.css';


const ItemList = ({ items }) => {
   
    //mapeo de los productos
    return (
        <div className="item-list">
            {items.map((prod) => {
                    return <Item prod={prod} key={prod.id} />;
            })}
        </div>
    );
};

export default ItemList;