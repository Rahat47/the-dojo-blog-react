import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const BlogDetails = () => {
    const history = useHistory();
    const { id } = useParams();
    const url = `http://localhost:8000/blogs/${id}`;
    const { data: blog, error, isPending } = useFetch(url);
    const handleClick = () => {
        fetch(url, {
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
