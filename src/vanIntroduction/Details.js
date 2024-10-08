import React from "react"
import {Link, useLoaderData, useOutletContext, useParams} from "react-router-dom"
import {VanIntroduction} from "./VanIntroduction";
import {getHostVans} from "../api";

export function loader({params}){
    console.log(params,'params')
    return getHostVans(params.id.slice(1))
}

export const Details = () => {

    // const param = useParams()
    // const [currentVan, setCurrentVan] = React.useState(null)
    const currentVan = useLoaderData()

    // React.useEffect(() => {
    //     fetch(`/api/host/vans/${params.id.slice(1)}`)
    //         .then(res => res.json())
    //         .then(data => setCurrentVan(data.vans)
    //         )
    // }, [])

    // if (!currentVan) {
    //     return <h1>Loading...</h1>
    // }



    return (
        <section>
            <Link
                to='..'
                relative='path'
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl}/>
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
                <VanIntroduction context={currentVan}/>
            </div>
        </section>
    )
}
