import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import {Link,NavLink} from 'react-router-dom'

const NavBar = () => {
  return (

    <header>

        <Link to={"/"}>
          <img className='logo' src="https://www.pedidosporwhatsapp.com.ar/fotos/379_logo.jpg" alt="Logo Molly" />
        </Link>

        <h1>Bebidas Molly</h1>
        
        <nav>
            <ul>
                <li>
                  <NavLink to={"/"}>Incio</NavLink>
                </li>
                <li>
                  <NavLink to={`/categoria/2`}>Bebidas Blancas</NavLink>
                </li>
                <li>
                  <NavLink to={`/categoria/1`}>Cerveza</NavLink>
                </li>
                <li>
                  <NavLink to={`about`}>Nosotros</NavLink>
                </li>
                <li><CartWidget/></li>
            </ul>
            
        </nav> 

    </header>
  )
}

export default NavBar