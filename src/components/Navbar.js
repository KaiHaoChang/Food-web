import {Link, useLocation} from "react-router-dom"
import React, {Fragment, useState} from 'react'
import Sidebar from './Sidebar'
import {faHome, faList, faCog} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const links = [
    {
      name : 'Home',
      path : '/',
      icon : faHome
    },
    {
      name : 'Recipes',
      path : '/recipes',
      icon : faList
    },
    {
      name : 'Setting',
      path : '/setting',
      icon : faCog
    }
  ]

  const close = () => {
    setShowSidebar(false)
  }

  const location = useLocation().pathname

  return (

    <React.Fragment>
      <div className="navbar container">
        <a href="/" className='logo'>F<span>oo</span>diesHub</a>
        <div className="nav-link">
          {links.map( item => 
            <Link className={location === item.path ? "active" : ""} to={item.path} key={item.name}>{item.name}</Link>
          )}
        </div>
        <div onClick={()=> setShowSidebar(!showSidebar)} className={showSidebar ? 'sidebar-btn active' : 'sidebar-btn'}>
          <div className="sidebar"></div>
          <div className="sidebar"></div>
          <div className="sidebar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar close = {close} links={links} />}
    </React.Fragment>

  )
}

export default Navbar
