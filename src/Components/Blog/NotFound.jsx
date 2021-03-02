import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="fof">
                <h1>
                    Error 404 <br />
                    <br />
                    Congratulations! You Broke the Thing! <br />
                    <br />
                    <Link to="/">Back to homepage...</Link>
                </h1>
            </div>
        </div>
    );
};

export default NotFound;
