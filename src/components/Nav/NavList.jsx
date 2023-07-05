import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

function NavList({items, listClassNames, itemClassNames}) {
  
  return (
    <ul className={listClassNames}>
      {items.map((item) => {
        return(
          <li className={itemClassNames} key={`${item.id}-${item.name}`}>
            <Link 
              className={classNames(item.isButton ? "btn-orange" : "link") }  
              to={item.route}
            >
              {item.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavList