import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {  useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { miBaseDeDatos } from "./FireBase";
import {Link,} from 'react-router-dom';
import './Form.css';

const Form = () => {
    const [name, setname] = useState ('');
    const [lastName, setLastName] = useState ('');

    const {cart, borrarTodo} = useContext (CartContext);
    const [numeroDeOrden,setNumeroDeOrden] = useState ('');

    const[cargando,setCargando] = useState (false);

    const handleSubmit = (e) => {
        setCargando (true)
        e.preventDefault();
       
       const order = {
          buyer: {name, lastName}, item: cart,
            date: serverTimestamp(),
       };
       const ordenDeCompras = collection (miBaseDeDatos,'ordenes')
       addDoc(ordenDeCompras, order)
        .then ((res) => {
            setNumeroDeOrden(res.id);
            borrarTodo();
        })
        .catch((error) =>{
            console.log(error)
        })
        .finally (() => {
            setCargando(false);
          })
       
    };

    const handleChangeName = (e) => {
        setname(e.target.value);
    };
       
    const handleChangeLastName = (e) => {
       setLastName(e.target.value);
    };
   console.log (numeroDeOrden);

   if (numeroDeOrden){
      return   <div className="terminado">
          <h1 className="despedida">Gracias por tu compra, tu Numero de Orden es  {numeroDeOrden}</h1>
      <Link to ='/'   className="botonParaIrHome">  Presiona aqui para Ir al Home</Link> 
            </div>       
   }


    return ( 
        <main>
               { cargando ? (
                    <h1  className="procesoEnviando">Enviando...</h1>
                ): (
        
             <div style={{ text: 'bold',minHeight: '70vh',
                  display: 'flex', justifyContent: 'center', 
                    alignItems: 'center', color: 'black', }}>

             <form className="form"  onSubmit={handleSubmit} action="">
                <label for="mail"  className="correo">Correo electrónico:</label>
                 <input className="imput" type="email" id="mail" name="user_mail" placeholder="Correo Electronico"/>

                    <input className="imput"
                        type="text" 
                        name="nombre"
                        placeholder="Nombre"
                        onChange={handleChangeName}
                        value={name}
                    />
                    <input className="imput"
                        type="text" 
                        name="apellido" 
                        placeholder="Apellido" 
                        onChange={handleChangeLastName}
                        value={lastName}
                    />
                    <button className="enviarBoton">Enviar</button>
                </form>
            </div>    
             )
            }
        </main>
    );
};

export default Form;




 
