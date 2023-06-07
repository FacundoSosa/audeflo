import React, { useState } from 'react'
import NavList from '../NavList'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import "./navbar.css"

function NavBar() {
  const [active, setActive] = useState(false)

  const handleToggler = () => {
    setActive(!active)
    console.log(active);
  }

  return (
    <header>
      <nav className='navbar'>
        <Link className='link title--sm' to="/"><h1>AUDEFLO</h1></Link>
        <button onClick={handleToggler} className='navbar-toggler'>=</button>
        <div className={classNames("navbar__container", {"is-active": active})}>
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

              listClassNames="navbar__ul"
              itemClassNames="navbar__item"
            />
        </div>
      </nav>
    </header>
  )
}

export default NavBar