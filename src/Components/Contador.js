import React, { useState } from 'react';
import './Contador.css';

const Contador = (props) => {
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
                <button disable = {count === props.stock} onClick={sumar}>+</button>
                <p>{count}</p>
                <button disable = {count === props.initial} onClick={restar}>-</button>
            </div>
            <button className="add-btn">Agregar al carrito</button>
        </div>
    );
};

export default Contador;