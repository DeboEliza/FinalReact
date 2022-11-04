import React, { useState } from 'react';
import './Contador.css';

const Contador = (props) => {
    const [count, setCount] = useState(props.initial);

    const sumar = () => {
        count <props.stock && setCount(count + 1);
    };

    const restar = () => {
        count < 1 && setCount(count - 1);
    };

    return (
        <div className="container-count">
            <div className="count-btn">
                <button className="botonsito" disable = {count === props.stock} onClick={sumar}>+</button>
                <p>{count}</p>
                <button className="botonsito" disable = {count === props.initial} onClick={restar}>-</button>
            </div>
            <button onClick ={() => props.agregado(count)} className="add-btn">Agregar al carrito</button>
        </div>
    );
};

export default Contador;