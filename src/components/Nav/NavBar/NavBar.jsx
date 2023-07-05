import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavList from '../NavList'
import classNames from 'classnames'
import "./navbar.css"
import menuIcon from "../../../assets/icons/menu.svg"
import closeIcon from "../../../assets/icons/close.svg"

function NavBar() {
  const [active, setActive] = useState(false)
  const [scrolling, setScrolling] = useState(false)
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth)
  const [windowPositionY, setWindowPositionY] = useState(window.scrollY)

  const handleToggler = () => {
    setActive(!active)
  }
  
  useEffect(() => {
    window.addEventListener("resize", () => setWindowInnerWidth(window.innerWidth))
    if (windowInnerWidth > 1024) {
      setActive(false)
    }
  }, [windowInnerWidth])

  useEffect(() => {  
    window.addEventListener("scroll", () => setWindowPositionY(window.scrollY))
    if (windowPositionY > 36) {
      setScrolling(true)
    } else {
      setScrolling(false)
    }
  }, [windowPositionY])
 
  return (
    <header className='header'>
      <nav className={classNames("navbar", {"scrolling": scrolling})}>
        <Link className='link title--sm' to="/"><h1>AUDEFLO</h1></Link>
        <button onClick={handleToggler} className='navbar-toggler icon'><img className='icon' src={menuIcon} alt="menu-icon.svg" /></button>
        <div id='navbar-container' className={classNames("navbar__container", {"is-active": active && windowInnerWidth <= 1024})}>
            <button onClick={handleToggler} className='navbar-toggler'><img src={closeIcon} alt="close-icon.svg"/></button>
            <NavList  
              items={[
                {id: 1, name: "Home", route: "/", isButton: false},
                {id: 2, name: "Nosotros", route: "/nosotros", isButton: false},
                {id: 3, name: "Eventos", route: "/eventos", isButton: false},
                {id: 4, name: "Contenido", route: "/contenido", isButton: false},
                {id: 5, name: "Servicios", route: "/servicios", isButton: false},
                {id: 6, name: "FAQ", route: "/faq", isButton: false},
                {id: 7, name: "Contacto", route: "/contacto", isButton: false},
                {id: 8, name: "HACETE SOCIO", route: "/socios", isButton: true},
              ]}

              listClassNames="navbar__ul"
              itemClassNames="navbar__item"
            />
        </div>
        {active && <div className='backdrop-filter'></div>}
      </nav>
    </header>
  )
}

export default NavBar