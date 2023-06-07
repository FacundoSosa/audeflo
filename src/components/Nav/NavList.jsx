import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

function NavList({items, listClassNames, linksClassNames}) {
  
  return (
    <ul className={listClassNames}>
      {items.map((item, index) => {
        return(
          <li>
            <Link 
              className={classNames(item.isButton ? "btn-orange link" : `link ${linksClassNames}`) } 
              key={`${index}-${item.name}`} 
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