import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.scss'

const Navbar = ()=> {

    return (
        <nav className="navbar" data-testid="navbar">
            <ul className="navbarItemContainer ">
                <li className="navbarItem"><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li className="navbarItem"><NavLink exact to="/counterPage" activeClassName="active" >Nextpage</NavLink></li>
            </ul>
        </nav>) 
}
export default Navbar