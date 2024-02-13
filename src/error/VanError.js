import {useRouteError} from "react-router-dom";

export default function VanError() {
    const err = useRouteError()
    return (
        <>
            <h1>{err.status}</h1>
            <h1>{err.statusText}</h1>
            <h1>{err.message}</h1>
        </>
    )
}