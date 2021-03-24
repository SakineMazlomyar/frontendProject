import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar: React.FC = () => {
    return ( <nav className="navbar" data-testid="navbar">
                <ul className="navbarItemContainer ">
                    <li className="navbarItem"><NavLink exact to="/" activeClassName="active">home</NavLink></li>
                    <li className="navbarItem"><NavLink exact to="/counter" activeClassName="active" id="counter-page">counter</NavLink></li>
                </ul>
            </nav>) 
}

export default Navbar