import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
 const [books, setBooks] = useState([]);
  useEffect(() =>{
    fetch('./booksData.json')
    .then(res => res.json())
    .then(data => setBooks(data))

  },[])

    return (
        <div className='mt-9'>
            <h1 className="font-bold text-center text-4xl">Books</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9'>
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;