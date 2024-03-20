// import { query } from 'express';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/api";

import "./communitypage.css";

function CommunityPage() {
  const [books, setBooks] = useState([]);

  const bookDTO = (image_url, title, authors, description) => {
    return {
      image_url: image_url,
      title: title,
      authors: authors,
      description: description,
    };
  };
  
  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <div className="community-page">
      <h2 className="availableBooks">Books Available</h2>
      <input
        type="text"
        id="bookSearch"
        placeholder="Search Books"
        title="type in a book"
        style={{ float: "right" }}
      ></input>

      {books.map((book) => {
        <div key={book.id}>
          <div>
            <h2>{book.title}</h2>
          </div>
          <div>
            <img src={book.image_url} alt="#" />
          </div>
          <div>
            <button>Add To Favorites</button>
          </div>
        </div>;
      })}
      {/* <div>
            <input
            type='text'
            placeholder='Search Books'
            value={query}
            onChange={(e) => setBookList(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div> */}
    </div>
  );
}

export default CommunityPage;

// const search = ({ searchBooks })
//     const [bookList, setBookList] = useState('');

// const handleSearch = () => {
//     searchBooks(query)
// }
