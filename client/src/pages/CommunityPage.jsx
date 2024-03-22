// import { query } from 'express';
import React from "react";
import Books from "../components/books";

// const search = ({ searchBooks })
//     const [bookList, setBookList] = useState('');

// const handleSearch = () => {
//     searchBooks(query)
// }

function CommunityPage() {
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
      <div>
      <Books/>
      </div>
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
