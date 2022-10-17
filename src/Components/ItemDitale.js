import Contador from "./Contador";

const ItemDitale = ({ item }) => {
   return (
      <div>
        <img src={item.img} alt=""/>
        <div>
            <h2>{item.title}</h2>
               <p>
                  Indumentaria para el hombre y la mujer activos que necesitan estar cómodos
                  y sentirse bien para transcurrir el día a día. Este tipo de diseño permite
                  apreciar en los pequeños detalles la elegancia de un estilo clásico que
                  valora los detalles trendy.
               </p>

             <Contador stock={10} initial={1}/>
        </div>
         
      </div>
   );

};

export default ItemDitale;