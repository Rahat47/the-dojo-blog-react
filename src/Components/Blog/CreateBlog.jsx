import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("rahat");
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();

    const url =
        "https://my-json-server.typicode.com/Rahat47/the-dojo-blog-react/blogs";

    const handleSubmit = e => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch(url, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            console.log("Success, a new blog was created");
            setIsPending(false);
            history.push("/");
        });
    };
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    aria-required
                    value={title}
                    placeholder="Enter the damn title"
                    onChange={e => setTitle(e.target.value)}
                />

                <label>Blog body:</label>
                <textarea
                    cols="30"
                    rows="10"
                    required
                    aria-required
                    placeholder="Your content goes here btw.."
                    value={body}
                    onChange={e => setBody(e.target.value)}
                ></textarea>

                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                >
                    <option value="rahat">rahat</option>
                    <option value="random">random</option>
                    <option value="hafsa">hafsa</option>
                </select>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
};

export default CreateBlog;
