import {NavLink, Outlet, useParams, useOutletContext} from "react-router-dom";

export const VanIntroduction = (props) => {
    // const params = useParams();
    const currentVan = props.context;
    return (
        <div>
            <header>
                <nav>
                    <NavLink className={({isActive}) => isActive ? 'my-link' : ''} end to={'.'}>Details</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'my-link' : ''} to={'pricing'}>Pricing</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'my-link' : ''} to={'photos'}>Photos</NavLink>
                </nav>
            </header>
            <Outlet context={currentVan}/>
        </div>
    )
}