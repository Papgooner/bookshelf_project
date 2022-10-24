import { useEffect } from "react";

function BookList(props) {
    let listOfBooks = [];
    let bookOne = {title: "1984", author: "George Orwell", genre: "Fiction", id: "0"};
    let bookTwo = {title: "The Two Towers", author: "J. R. R. Tolkien", genre: "Fiction", id: "1"};
    let bookThree = {title: "Oxford English Dictionary", author: "Oxford Dictionaries", genre: "Non-Fiction", id: "2"};
    let bookFour = {title: "1984", author: "George Orwell", genre: "Fiction", id: "3"};
    let bookFive = {title: "The Two Towers", author: "J. R. R. Tolkien", genre: "Fiction", id: "4"};
    let bookSix = {title: "Oxford English Dictionary", author: "Oxford Dictionaries", genre: "Non-Fiction", id: "5"};
    let bookSeven = {title: "1984", author: "George Orwell", genre: "Fiction", id: "6"};
    let bookEight = {title: "The Two Towers", author: "J. R. R. Tolkien", genre: "Fiction", id: "7"};
    let bookNine = {title: "Oxford English Dictionary", author: "Oxford Dictionaries", genre: "Non-Fiction", id: "8"};
    let bookTen = {title: "1984", author: "George Orwell", genre: "Fiction", id: "9"};
    let bookEleven = {title: "The Two Towers", author: "J. R. R. Tolkien", genre: "Fiction", id: "10"};
    let bookTwelve = {title: "Oxford English Dictionary", author: "Oxford Dictionaries", genre: "Non-Fiction", id: "11"};
    let bookThirteen = {title: "1984", author: "George Orwell", genre: "Fiction", id: "12"};
    let bookFourteen = {title: "The Two Towers", author: "J. R. R. Tolkien", genre: "Fiction", id: "13"};
    let bookFifthteen= {title: "Oxford English Dictionary", author: "Oxford Dictionaries", genre: "Non-Fiction", id: "14"};
    let bookSixteen = {title: "1984", author: "George Orwell", genre: "Fiction", id: "15"};
    let bookSeventeen = {title: "The Two Towers", author: "J. R. R. Tolkien", genre: "Fiction", id: "16"};
    let bookEighteen = {title: "Oxford English Dictionary", author: "Oxford Dictionaries", genre: "Non-Fiction", id: "`7"};
    listOfBooks.push(bookOne, bookTwo, bookThree, bookFour, bookFive, bookSix, bookSeven, bookEight, bookNine, bookTen, bookEleven, bookTwelve, bookThirteen, bookFourteen, bookFifthteen, bookSixteen, bookSeventeen, bookEighteen);
    console.log(listOfBooks);

    useEffect(() => {
        console.log(listOfBooks);
        props.sendData(listOfBooks);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
}

export default BookList;