import {Link, NavLink, Outlet} from "react-router-dom";
import {cyan} from "@mui/material/colors";

export const Host = () => {
    const myLink = {
        color: '#FF8C38',
        textDecoration: 'underline',
        fontWeight: 'bold'
    }

    return (
        <div>
            <header>
                {/*<h1>*/}
                {/*    Host*/}
                {/*</h1>*/}
                <nav>
                    <NavLink style={({isActive}) => isActive ? myLink : null} end to={''}>Dashboard</NavLink>
                    <NavLink style={({isActive}) => isActive ? myLink : null} to={'vansList'}>VansList</NavLink>
                    <NavLink style={({isActive}) => isActive ? myLink : null} to={'income'}>Income</NavLink>
                    <NavLink style={({isActive}) => isActive ? myLink : null}
                             to={'/host/reviews'}>Reviews</NavLink>
                </nav>
            </header>
            <Outlet/>
        </div>
    )
}