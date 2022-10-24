import { useState, useEffect } from "react";
import "./book.css";

function Book(props) {
    /* document.getElementById("title").innerHTML = props.title;
    document.getElementById("author").innerHTML = props.author;
            document.getElementById("genre").innerHTML = props.genre; */
    const [author, setAuthor] = useState();
    const [title, setTitle] = useState();
    const [genre, setGenre] = useState();

    useEffect(() => {
        setTitle(props.title);
        setAuthor(props.author);
        setGenre(props.genre);
    }, []);

    console.log(props.author);
    return (
        <div className="bookBorder">
            <p id="title">{title}</p>
            <p id="author">{author}</p>
            <p id="genre">{genre}</p>
        </div>
    )
}

export default Book;