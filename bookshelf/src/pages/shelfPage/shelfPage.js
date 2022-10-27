import BookList from "../../components/bookList";
import Book from "../../components/book";
import { useState } from "react";
import "./shelfPage.css"; 
import NavBar from "../../components/navBar";

function ShelfPage() {
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])

    function collectData(recievedBooks) {
        console.log(recievedBooks);

        var readBooks = recievedBooks.filter(function(a) {
            return a.status === 1;
        });

        var currentBooks = recievedBooks.filter(function(b) {
            return b.status === 2;
        });

        var plannedBooks = recievedBooks.filter(function(c) {
            return c.status === 3;
        });

        setData1(readBooks);
        setData2(currentBooks);
        setData3(plannedBooks);
        console.log(readBooks);
        console.log(currentBooks);
        console.log(plannedBooks);
    };
    const showReadBooks = data1?.map((pol) => <Book key={pol.id} title={pol.title} id={pol.id} author={pol.author} genre={pol.genre} />)
    const showCurrentBooks = data2?.map((pol) => <Book key={pol.id} title={pol.title} id={pol.id} author={pol.author} genre={pol.genre} />)
    const showPlannedBooks = data3?.map((pol) => <Book key={pol.id} title={pol.title} id={pol.id} author={pol.author} genre={pol.genre} />)
    return (
        <div id="shelfPageDiv">
            <div id="navDiv">
                <NavBar />
                </div>
                <div id="contentDiv">
        <BookList sendData={collectData} /> 
        <div className="titleAndContent" >
            <h1>Previously Read</h1>
        <div id="displayBooks">
        <>{showReadBooks}</>
        </div>
        </div>
        </div>
        <div className="titleAndContent" >
            <h1>Currently reading</h1>
        <div id="displayBooks">
        <>{showCurrentBooks}</>
        </div>
        </div>
        <div className="titleAndContent" >
            <h1>Planning to read</h1>
        <div id="displayBooks">
        <>{showPlannedBooks}</>
        </div>
        </div>
        </div>
    )
}

export default ShelfPage;