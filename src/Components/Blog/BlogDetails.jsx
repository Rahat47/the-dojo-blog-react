import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const BlogDetails = () => {
    const history = useHistory();
    const { id } = useParams();
    const proxyUrl = "https://pure-inlet-02907.herokuapp.com/";
    const url = `https://my-json-server.typicode.com/Rahat47/the-dojo-blog-react/blogs/${id}`;
    const { data: blog, error, isPending } = useFetch(url);

    const handleClick = () => {
        fetch(proxyUrl + url, {
            method: "DELETE",
        }).then(() => {
            history.push("/");
        });
    };
    return (
        <div className="blog-details">
            {isPending && <div>Loading... </div>}
            {error && <div>{error} </div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
};

export default BlogDetails;
