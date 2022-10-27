import { useEffect, useState } from "react";

function BookList(props) {
  const [thing, setThing] = useState();

  //  STATUS CODES:  
  //  1 = ALREADY READ
  //  2 = CURENTLY READING
  //  3 = PLAN TO READ
  let listOfBooks = [
    { title: "1984", author: "George Orwell", genre: "Fiction", id: "0", status: 1 },
    { title: "The Two Towers", author: "J. R. R. Tolkien", genre: "Fiction", id: "1", status: 2 },
    { title: "Oxford English Dictionary", author: "Oxford Dictionaries", genre: "Non-Fiction", id: "2", status: 1 },
    { title: "1984", author: "George Orwell", genre: "Fiction", id: "3", status: 3 },
    { title: "The Two Towers", author: "J. R. R. Tolkien", genre: "Fiction", id: "4", status: 3 },
    { title: "Oxford English Dictionary", author: "Oxford Dictionaries", genre: "Non-Fiction", id: "5", status: 3 },
    { title: "1984", author: "George Orwell", genre: "Fiction", id: "6", status: 3 },
    { title: "The Two Towers", author: "J. R. R. Tolkien", genre: "Fiction", id: "7", status: 1 },
    { title: "Oxford English Dictionary", author: "Oxford Dictionaries", genre: "Non-Fiction", id: "8", status: 3 },
    { title: "1984", author: "George Orwell", genre: "Fiction", id: "9", status: 2 },
    { title: "The Two Towers", author: "J. R. R. Tolkien", genre: "Fiction", id: "10", status: 1 },
    { title: "Oxford English Dictionary", author: "Oxford Dictionaries", genre: "Non-Fiction", id: "11", status: 3 },
    { title: "1984", author: "George Orwell", genre: "Fiction", id: "12", status: 1 },
    { title: "The Two Towers", author: "J. R. R. Tolkien", genre: "Fiction", id: "13", status: 3, },
    { title: "Oxford English Dictionary", author: "Oxford Dictionaries", genre: "Non-Fiction", id: "14", status: 1 },
    { title: "1984", author: "George Orwell", genre: "Fiction", id: "15", status: 1 },
    { title: "The Two Towers", author: "J. R. R. Tolkien", genre: "Fiction", id: "16", status: 3 },
    { title: "Oxford English Dictionary", author: "Oxford Dictionaries", genre: "Non-Fiction", id: "`7", status: 3 },
  ];

  useEffect(() => {
    props.sendData(listOfBooks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(props.newStatus);
  console.log(props.newStatus.statusValue);
  // specifying element with [0] or using .id immediatley causes the app to break
    const found = listOfBooks.find(element => element.id === thing);
   console.log(found); 
}
export default BookList;