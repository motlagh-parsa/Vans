import React from "react"
import {Link, useLocation, useParams} from "react-router-dom"

export default function VanInfo() {
    let params = useParams()
    const [van, setVan] = React.useState(null)
    const location = useLocation()
    console.log(location, 'location')
    console.log(params, 'params')

    React.useEffect(() => {
        fetch(`/api/vans/${params.id.slice(1)}`)
            .then(res => res.json())
            .then((data) => {
                setVan(data.vans)
            })
    }, [params.id])


    return (
        <div className="van-detail-container">
            <Link
                to={`..${location.state.search}`}
                relative='path'
                className="back-button"
            >&larr;
                <span>
                    Back to {!(location.state.filterType) ? <span> all </span> : <span> {location.state.filterType} </span>}vans</span></Link>
            {van ? (
                <div className="van-detail">
                    <img className={`center-img img-van-type ${van.type} selected`} alt={van.name} src={van.imageUrl}/>
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van?.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}