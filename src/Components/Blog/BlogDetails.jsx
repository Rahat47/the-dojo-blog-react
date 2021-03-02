import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const url = `http://localhost:8000/blogs/${id}`;
    const { data: blog, error, isPending } = useFetch(url);
    return (
        <div className="blog-details">
            {isPending && <div>Loading... </div>}
            {error && <div>{error} </div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
    );
};

export default BlogDetails;