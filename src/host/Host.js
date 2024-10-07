import {Link, NavLink, Outlet, useLoaderData} from "react-router-dom";
import {cyan} from "@mui/material/colors";
import {RequireAuth} from "../utils";

export const HostLoader = async ({request}) => {
    // console.log(new URL(request.url).pathname, 'new URL(request.url).pathname')
    // console.log(request, 'request')
    // console.log(request.url, 'request.url')
    return await RequireAuth({pathName: new URL(request.url).pathname})
}

const Host = () => {
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

export default Host