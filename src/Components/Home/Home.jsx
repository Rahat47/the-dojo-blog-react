import React from "react";
import useFetch from "../../Hooks/useFetch";
import BlogList from "../Blog/BlogList";

const Home = () => {
    const proxyUrl = "https://pure-inlet-02907.herokuapp.com/";
    const url =
        "https://my-json-server.typicode.com/Rahat47/the-dojo-blog-react/blogs";
    const { data: blogs, isPending, error } = useFetch(proxyUrl + url);

    return (
        <div className="home">
            {error && <div>{error} </div>}
            {isPending && <div> Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
};

export default Home;
