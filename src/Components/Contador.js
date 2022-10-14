import React, { useState } from 'react';
import './Contador.css';

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);

    const sumar = () => {
        count <props.stock && setCount(count + 1);
    };

    const restar = () => {
        count <props.stock && setCount(count - 1);
    };

    return (
        <div className="container-count">
            <div className="count-btn">
                <button onClick={sumar}>+</button>
                <p>{count}</p>
                <button onClick={restar}>-</button>
            </div>
            <button className="add-btn">Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;