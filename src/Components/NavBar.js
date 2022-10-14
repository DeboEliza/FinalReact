import './NavBar.css';
import CardWidget from './CardWidget';
import logotipo from '../Fotos/img/logotipo.png';
import Brand from './Brand';
import {Link,NavLink} from 'react-router-dom';

function NavBar () {
     return (
        <div> 
           <Link to="/"><img src={logotipo} alt="" className='logo-empresa'/></Link>
         <Brand><Link to="/">FLORENCIA INDUMENTARIA</Link></Brand>
         <div className='div-menu'>
            <ul className="menu">
                <NavLink to='/category/pantalones'>Pantalones</NavLink>
                <NavLink to="/category/remeras">Remeras</NavLink>
                <NavLink to="/category/camisas">camisas</NavLink>
            </ul>
            <Link to='/CardWidget'/>
            <CardWidget/>
         </div>
        </div>
     );
};

export default NavBar;