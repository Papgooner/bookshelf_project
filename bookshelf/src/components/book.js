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

    function changeArray(event) {
        console.log(event.target.value);
        console.log("change array has ran");
    };
    return (
        <div className="bookBorder">
            <p id="title">{title}</p>
            <p id="author">{author}</p>
            <p id="genre">{genre}</p>
            <select className="bookSelect" onChange={changeArray}>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
            </select>
        </div>
    )
}

export default Book;