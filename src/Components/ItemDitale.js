import ItemCount from "./Contador";

const ItemDitale = ({ item }) =>{
   return (
      <div>
        <img src={item.img} alt=""/>
        <div>
            <h2>{item.title}</h2>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  In est, voluptas temporibus fuga deleniti velit!
                  Id exercitationem magni fuga,delectus magnam, velit sit autem
                  harum deserunt unde non. Fuga, tempore?
               </p>

             <ItemCount stock={10} initial={1}/>
        </div>
         
      </div>
   );

};

export default ItemDitale;