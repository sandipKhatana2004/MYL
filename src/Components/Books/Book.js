import React from "react";
import "./book.css";

const Book = ({ Book }) => {
  let author;
  if (Book.author === "Unknown") {
    author = "";
  } else author = `author: ${Book.author}`;
  return (
    <div className="nt-book-comp">
      <h5 className="nt-book-title">Name: {Book.title}</h5>
      <h6 className="nt-book-author"> {author}</h6>
      <h6 className="nt-book-year">Year: {Book.year}</h6>
      <h6 className="nt-book-pages">Pages: {Book.pages}</h6>
    </div>
  );
};

export default Book;
