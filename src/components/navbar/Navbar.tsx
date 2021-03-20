import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
export default class  Navbar  extends React.Component <{}, {}>{
    render(){
     
        return (
            <nav className="navbar">
                <ul className="navbarItemContainer ">
                    <li className="navbarItem"> <NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li className="navbarItem"><NavLink exact to="/nextpage" activeClassName="active" >Nextpage</NavLink></li>
                </ul>
            </nav>)

    }
}
