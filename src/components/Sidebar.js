import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Sidebar = ({ links, close }) => {
  
  const location = useLocation()
  console.log(location)
  return (
    <div onClick={close} className="left-sidebar">
      {links.map(item => 
      <Link className={location.pathname === item.path ? "sidebar-link active" : "sidebar-link"} to={item.path} key={item.name}>
        <FontAwesomeIcon icon = {item.icon} />
        {item.name}
      </Link>)}
    </div>
  )
}

export default Sidebar