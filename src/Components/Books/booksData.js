import React, { useState, useEffect } from "react";
import BookList from "./BookList";
import "./BookSearch.css";

function BookSearch(props) {
  const [books, setBooks] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.itbook.store/1.0/search/${searchName}`
      );
      const data = await response.json();
      setBooks(data.books);
    }

    if (searchName) {
      fetchData();
    }
  }, [searchName]);

  function handleSearch(e) {
    e.preventDefault();
    setSearchName(e.target.search.value);
  }

  return (
    <div className="book-search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {books.length > 0 ? (
        <div>
          <h2>Search Results</h2>
          <BookList books={books} />
        </div>
      ) : (
        <p>No search results yet. Enter a book name above to search.</p>
      )}
    </div>
  );
}

export default BookSearch;
