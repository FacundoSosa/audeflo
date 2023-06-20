import React, { useState, useEffect, useRef } from 'react'
import NavList from '../NavList'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import "./navbar.css"

function NavBar() {
  const [active, setActive] = useState(false)
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth)
  const [headerStyle, setHeaderStyle] = useState("")
  const headerRef = useRef()

  const handleToggler = () => {
    setActive(!active)
  }
  
  useEffect(() => {
    window.addEventListener("resize", () => setWindowInnerWidth(window.innerWidth))
    if (windowInnerWidth > 1024) {
      setActive(false)
    }
  }, [windowInnerWidth])
  
 /*  const handleScroll = () => {
    console.log("scroll");
  }

  window.addEventListener("scroll", handleScroll) */
  
 
  return (
    <header className={headerStyle} >
      <nav className='navbar' ref={headerRef}>
        <Link className='link title--sm' to="/"><h1>AUDEFLO</h1></Link>
        <button onClick={handleToggler} className='navbar-toggler'>=</button>
        <div id='navbar-container' className={classNames("navbar__container", {"is-active": active && windowInnerWidth <= 1024})}>
            <button onClick={handleToggler} className='navbar-toggler'>X</button>
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