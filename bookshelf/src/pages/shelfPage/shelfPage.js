import BookList from "../../components/bookList";
import Book from "../../components/book";
import { useState } from "react";
import "./shelfPage.css"; 
import NavBar from "../../components/navBar";

function ShelfPage() {
    const [data, setData] = useState([])
    function collectData(recievedBooks) {
        console.log(recievedBooks[0]);
        setData(recievedBooks);
        console.log(data);
    };
    const showBooks = data?.map((pol) => <Book key={pol.id} title={pol.title} id={pol.id} author={pol.author} genre={pol.genre} />)
    return (
        <div id="shelfPageDiv">
            <div id="navDiv">
                <NavBar />
                </div>
                <div id="contentDiv">
                    <div id="titleDiv">
        <h1>Reading</h1>
        </div>
        <BookList sendData={collectData} /> 
        <div id="displayBooks">
        <>{showBooks}</>
        </div>
        </div>
        </div>
    )
}

export default ShelfPage;