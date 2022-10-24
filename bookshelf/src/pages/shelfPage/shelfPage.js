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
        <div>
            <div id="navDiv">
                <NavBar />
                </div>
                <div id="contentDiv">
        <h1>Shelf page</h1>
        <BookList sendData={collectData} /> 
        <div className="stopDivEscaping">
        {showBooks}
        </div>
        </div>
        </div>
    )
}

export default ShelfPage;