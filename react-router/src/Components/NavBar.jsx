import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'
const NavBar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to="/" className={({isActive}) =>isActive ? "active-link":""}>
                Home
                </NavLink>
               {/* <Link to="/"> Home</Link> */}
            </li>
            <li>
                <NavLink to="/about" className={({isActive}) =>isActive ? "active-link":""}>
                About
                </NavLink>
                
               {/* <Link to="/about">About</Link> */}
            </li>
            <li>
                <NavLink to="/dashboard" className={({isActive}) =>isActive ? "active-link":""}>
               Dashboard
                </NavLink>
                {/* <Link to="/dashboard">Dashboard</Link> */}
            </li>
        </ul>
    </div>
  )
}

export default NavBar
