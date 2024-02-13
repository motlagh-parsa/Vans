import {useOutletContext} from "react-router-dom";

export const Pricing = () => {
    const currentVan = useOutletContext()
    console.log(currentVan, 'currentVan')
    return (
        <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>
    )
}