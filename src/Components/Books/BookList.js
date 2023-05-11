import React from "react";
import "./BookList.css";

function BookList(props) {
  const { books } = props;

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.isbn} className="book">
          <div className="book-image">
            <img src={book.image} alt={book.title} />
          </div>
          <div className="book-details">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Price: {book.price}</p>
            <a href={book.url}>View on IT Bookstore</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;

// import React from "react";
// import "./book.css";

// const Book = (props) => {
//   console.log(props);
//   return <div></div>;
// };

// export default Book;

// let author;
// if (Book.author === "Unknown") {
//   author = "";
// } else author = `author: ${Book.author}`;
// return (
//   <div className="nt-book-comp">
//     <h5 className="nt-book-title">Name: {Book.title}</h5>
//     <h6 className="nt-book-author"> {author}</h6>
//     <h6 className="nt-book-year">Year: {Book.year}</h6>
//     <h6 className="nt-book-pages">Pages: {Book.pages}</h6>
//   </div>
