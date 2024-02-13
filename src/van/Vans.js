import React, {useEffect, useState} from "react";
import '../index.css'
import {Link, NavLink, useSearchParams, useLoaderData} from "react-router-dom";
import {Button, ButtonGroup} from "@mui/material";
import {getVans} from "../api";
import async from "async";


export function loader() {
    // throw new Error('Zayidi ke')
    return getVans()
}

const Vans = () => {
    const vans = useLoaderData()
    console.log(vans, 'vans')

    // const [resultVans, setResultVans] = useState([])
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)

    const [searchParams, setSearchParams] = useSearchParams()
    const filterBy = searchParams.get('type')

    const filterType = searchParams.get('type')

    // useEffect(() => {
    //     fetch('api/vans')
    //         .then(res => res.json())
    //         .then(data => setResultVans(data.vans))
    // }, []);

    // useEffect(() => {
    //     async function loadVans() {
    //         setLoading(true)
    //         try {
    //             const data = await getVans()
    //             setResultVans(data)
    //         } catch (err) {
    //             console.log(err)
    //             setError(err)
    //         }
    //
    //         setLoading(false)
    //     }
    //
    //     loadVans()
    // }, [])


    // const filtered = filterBy ? resultVans.filter(van => van.type.toLowerCase() === filterBy) : resultVans
    const filtered = filterBy ? vans.filter(van => van.type.toLowerCase() === filterBy) : vans


    const vanItems = filtered.map(van => (
        <div key={van.id} className='van-tile'>
            <Link to={`:${van.id}`} state={{
                search: `?${searchParams.toString()}`, filterType: filterType
            }}>
                <img src={van.imageUrl}/>
                <div className='van-info'>
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    const getNewSearchParamsString = (key, value) => {
        const sp = new URLSearchParams(searchParams)
        sp.set(key, value)
        return `?${sp.toString()}`
    }

    const handleFilterChange = (key, value) => {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
        })
    }

    // if (loading) {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // }

    // if (error) {
    //     return (
    //             <h1>
    //                 {error.statusText}
    //             </h1>
    //     )
    // }

    return (
        <div className="van-list-container">
            <h1>Here's Vans to explore</h1>
            <div className={'van-list-filter-buttons'}>
                <Button className={`van-type simple ${filterType === 'simple' ? 'selected' : ''}`}
                        onClick={() => handleFilterChange('type', 'simple')}>simple</Button>
                <Button className={`van-type rugged ${filterType === 'rugged' ? 'selected' : ''}`}
                        onClick={() => handleFilterChange('type', 'rugged')}>rugged</Button>
                <Button className={`van-type luxury ${filterType === 'luxury' ? 'selected' : ''}`}
                        onClick={() => handleFilterChange('type', 'luxury')}>luxury</Button>
                {filterType &&
                    <Button onClick={() => handleFilterChange('type', null)}>Clear filters</Button>}
            </div>

            {/*<div className={'van-list-filter-buttons'}>*/}
            {/*    <Link className='van-type simple' to={getNewSearchParamsString('type', 'simple')}>simple</Link>*/}
            {/*    <Link className='van-type rugged' to={getNewSearchParamsString('type', 'rugged')}>rugged</Link>*/}
            {/*    <Link className='van-type luxury' to={getNewSearchParamsString('type', 'luxury')}>luxury</Link>*/}
            {/*    <Link className='van-type clear-filters' to={''}>Clear filters</Link>*/}
            {/*</div>*/}

            {/*<div className={'van-list-filter-buttons'}>*/}
            {/*    <Link className='van-type simple' to={'?type=simple'}>simple</Link>*/}
            {/*    <Link className='van-type rugged' to={'?type=rugged'}>rugged</Link>*/}
            {/*    <Link className='van-type luxury' to={'?type=luxury'}>luxury</Link>*/}
            {/*    <Link className='van-type clear-filters' to={''}>Clear filters</Link>*/}
            {/*</div>*/}

            {/*<ButtonGroup variant="text" aria-label="text button group">*/}

            {/*    <Button onClick={() => {*/}
            {/*        setSearchParams({type: 'simple'})*/}
            {/*    }}>simple</Button>*/}

            {/*    <Button onClick={() => {*/}
            {/*        setSearchParams({type: 'rugged'})*/}
            {/*    }}>rugged</Button>*/}

            {/*    <Button onClick={() => {*/}
            {/*        setSearchParams({type: 'luxury'})*/}
            {/*    }}>luxury</Button>*/}

            {/*    <Button onClick={() => {*/}
            {/*        setSearchParams('')*/}
            {/*    }}>Clear filters</Button>*/}

            {/*</ButtonGroup>*/}
            {/*{resultVans.length > 0 ?*/}
            <div className="van-list">
                {vanItems}
            </div>
            {/*: <h2>Loading...</h2>}*/}
        </div>
    )
}

export default Vans