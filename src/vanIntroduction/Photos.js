import {useOutletContext} from "react-router-dom";

export const Photos = () => {
    const currentVan = useOutletContext()
    console.log(currentVan, 'currentVan')
    return (
        <img src={currentVan.imageUrl} className="host-van-detail-image"/>
    )
}