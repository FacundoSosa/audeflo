import React from 'react'
import NavList from '../Nav/NavList'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <Link className='link title--sm' to="/"><h1>AUDEFLO</h1></Link>
      <nav>
          <NavList  
            items={[
              {name: "Home", route: "/", isButton: false},
              {name: "Nosotros", route: "/nosotros", isButton: false},
              {name: "Eventos", route: "/eventos", isButton: false},
              {name: "Contenido", route: "/contenido", isButton: false},
              {name: "Servicios", route: "/servicios", isButton: false},
              {name: "FAQ", route: "/faq", isButton: false},
              {name: "Contacto", route: "/contacto", isButton: false},
              {name: "HACETE SOCIO", route: "/socios", isButton: true},
            ]}

            listClassNames="navbar-ul"
            linksClassNames="navbar-link"
          />
      </nav>
    </header>
  )
}

export default Header