import { useState, useEffect } from "react";
import "./book.css";

function Book(props) {
    const [author, setAuthor] = useState();
    const [title, setTitle] = useState();
    const [genre, setGenre] = useState();
    const [id, setId] = useState();

    useEffect(() => {
        setTitle(props.title);
        setAuthor(props.author);
        setGenre(props.genre);
        setId(props.id);
    }, []);

    function changeHandler(event) {
        let thing = event.target.value;
        let statusPackage = [
            {statusValue: thing, id: id}
        ]
        props.sendStatus(statusPackage);
    };
    return (
        <div className="bookBorder">
            <p id="title">{title}</p>
            <p id="author">{author}</p>
            <p id="genre">{genre}</p>
            <select className="bookSelect" onChange={changeHandler}>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
            </select>
        </div>
    )
}

export default Book;