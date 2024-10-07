import React from "react"
import {Link, NavLink, Outlet} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Button} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

export default function Header() {
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink className={({isActive}) => isActive ? 'my-link' : ''} to='about'>About</NavLink>
                <NavLink className={({isActive}) => isActive ? 'my-link' : ''} to="/host">Host</NavLink>
                <NavLink className={({isActive}) => isActive ? 'my-link' : ''} to="/vans">Vans</NavLink>
                < NavLink className={({isActive}) => isActive ? 'my-link' : ''} to='login'><AccountCircleIcon
                    className={'login-icon'}/></NavLink>
                <Button onClick={() => {
                    localStorage.removeItem('token')
                }} style={{color: 'black'}}><LogoutIcon
                    className={'login-icon'}/></Button>

            </nav>
        </header>)
}