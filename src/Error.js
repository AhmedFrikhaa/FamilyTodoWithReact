import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div className="not-found">
            <h1> 404 </h1>
            <p>Sorry, that page cannot be found</p>
            <Link style={{
                textDecoration: 'none',
                color: '#C39523'
            }} to="/"> ←Back to the homepage...</Link>
        </div>
    );
}

export default Error;


