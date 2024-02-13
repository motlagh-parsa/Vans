import React from "react"
import {Link, NavLink, Outlet} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {
    console.log(AccountCircleIcon, 'AccountCircleIcon')
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink className={({isActive}) => isActive ? 'my-link' : ''} to='about'>About</NavLink>
                <NavLink className={({isActive}) => isActive ? 'my-link' : ''} to="/host">Host</NavLink>
                <NavLink className={({isActive}) => isActive ? 'my-link' : ''} to="/vans">Vans</NavLink>
                <NavLink className={({isActive}) => isActive ? 'my-link' : ''} to='logIn'><AccountCircleIcon className={'login-icon'}/></NavLink>
            </nav>
        </header>
    )
}