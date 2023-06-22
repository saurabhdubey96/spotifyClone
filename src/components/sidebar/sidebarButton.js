import React from 'react'
import './sidebarButton.css'
import { BrowserRouter, Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { IconContext } from 'react-icons'

export default function SidebarButton(props) {
  

  const location=useLocation();
  console.log(location)
  const isActive=location.pathname===props.to
  const btnClass=isActive?"btn-body active":'btn-body'
  return (
    // <BrowserRouter>
   <Link to={props.to}>
    <div className={btnClass}>
      <IconContext.Provider value={{size:"24px", className:"btn-icon"}}>
      {props.icon}
      <p className='btn-title'>{props.title}</p>
      </IconContext.Provider>
    </div>
    </Link>
  // </BrowserRouter>
  )
}
