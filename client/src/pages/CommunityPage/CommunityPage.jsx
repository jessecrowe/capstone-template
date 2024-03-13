// import { query } from 'express';
import React, { useState } from 'react'

// const search = ({ searchBooks })
//     const [bookList, setBookList] = useState('');

// const handleSearch = () => {
//     searchBooks(query)
// }

function CommunityPage() {
  return (
    <>
        <h2 color='yellow'>Books Available</h2>
        <input  type='text' id='bookSearch' placeholder='Search Books' title='type in a book' style={{float: 'right'}}></input>
        {/* <div>
            <input
            type='text'
            placeholder='Search Books'
            value={query}
            onChange={(e) => setBookList(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div> */}
        
    </>
  )
}

export default CommunityPage