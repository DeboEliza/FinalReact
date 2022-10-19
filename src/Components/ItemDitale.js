import Contador from "./Contador";

const ItemDitale = ({ item }) => {
   const [unidades, setUnidades] = useState(0);

   const agregado =(numero) => {
       // console.log (`añadiste ${numero}`);
      setUnidades(numero);
   };

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
            <Contador agregado={agregado} stock={10} initial={1}/>
         </div>
      </div>
   );

};
//recordar armar una condicion con el contador dentro  clase 9
export default ItemDitale;