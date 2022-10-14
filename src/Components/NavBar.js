import './NavBar.css';
import CardWidget from './CardWidget';
import logotipo from '../Fotos/img/logotipo.png';
import Brand from './Brand';

function NavBar () {
     return (
        <div> 
           <a href="/"><img src={logotipo} alt="" className='logo-empresa'/></a>
         <Brand><a href="/">FLORENCIA INDUMENTARIA</a></Brand>
         <div className='div-menu'>
            <ul className="menu">
                <a href="./category/pantalones">Pantalones</a>
                <a href="./category/remeras">Remeras</a>
                <a href="./categoty/camisas">camisas</a>
            </ul>
            <CardWidget/>
         </div>
        </div>
     );
};

export default NavBar;