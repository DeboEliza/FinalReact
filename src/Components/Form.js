import { useEffect, useState } from "react"

const Form = () =>{
    const [name, setname] = useState ("");
    const [lastName, setLastName] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();
         //este despues lo tengo que poner en una base de DATOS
        console.log (name, lastName)
    };

    const handleChangeName = (e) =>{
        setname(e.target.value);
    };
       
    const handleChangeLastName = (e) =>{
        setLastName(e.target.value);
    };

    const handleMouseMove = (e) => {
        console.log (e.clientX, e.clientY);
    }

    //con esto puedo borrar movimientos del mouse para evitar llenar la memoria
    
    useEffect (() =>{
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    })

    return (
        <div style={{minHeight: '70vh',
              display: 'flex',
               justifyContent: 'center',
                alignItems: 'center'
                }}
            >
                
                <form onSubmit={handleSubmit} action="">
                    <imput 
                        type="text" 
                        name="nombre"
                        placeholder="Nombre"
                        onChange={handleChangeName}
                        value={name}
                    />
                    <imput 
                        type="text" 
                        name="apellido" 
                        placeholder="Apellido" 
                        onChange={handleChangeLastName}
                        value={lastName}
                    />
                    <button>Enviar</button>
                </form>
        </div>
    )
}

export default Form