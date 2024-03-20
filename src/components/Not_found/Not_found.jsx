import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Not_found = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops!</h1>
            <p>{error.statusText || error.massage }</p>
            <Link to="/">Go back</Link>
        </div>
    );
};

export default Not_found;