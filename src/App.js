import logo from './logo.svg';
import './App.css';
import Server from "./server";
import {useEffect} from "react";
import {Link, useLoaderData} from "react-router-dom";

export function loader() {
    return 'this is pencil nok tiz'
}

function App() {
    const data = useLoaderData()
    console.log(data, 'data')
    return (
        <div className="home-container">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect
                road trip.</p>
            <Link to="vans">Find your van</Link>
        </div>
    )
}

export default App;
