import React, { useState } from "react";
import Books from "./booksData";
import Book from "./Book";
import "./book.css";
import axios from "axios";

const NoteTaking = (e) => {
  const [searchName, setSearchName] = useState();
  const baseURL = `https://api.itbook.store/1.0/search/${searchName}`;

  const books = Books.map((book) => {
    return <Book key={book.imageLink} Book={book} />;
  });

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response);
    });
  }, [searchName]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchName(e.target.value);
  };

  return (
    <div className="nt-main">
      <input type="text" onChange={handleChange} value={searchName}></input>
      {/* <div className="nt-booksList">{books}</div> */}
    </div>
  );
};

export default NoteTaking;
