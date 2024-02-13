import {Link} from "react-router-dom";

export const NotFound = () => {
    return (
        <div style={{textAlign: 'center'}}>
            Sorry, the page you were looking for was not found.
            <div>
                <Link to={'/'}>Return to home</Link>
            </div>
        </div>
    )
}
