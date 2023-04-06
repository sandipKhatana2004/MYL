import React from "react";
import Books from "./booksData";
import Book from "./Book";
import "./notetaking.css";

const NoteTaking = () => {
  const books = Books.map((book) => {
    return <Book key={book.imageLink} Book={book} />;
  });

  return (
    <div className="nt-main">
      <div className="nt-booksList">{books}</div>
    </div>
  );
};

export default NoteTaking;
