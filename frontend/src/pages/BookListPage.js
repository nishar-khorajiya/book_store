import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookList from '../components/BookList';

function BookListPage() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const { data } = await axios.get('http://localhost:5000/books');
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/books/${id}`);
    fetchBooks();
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Books</h1>
        <Link to="/books/add" className="btn btn-primary">Add New Book</Link>
      </div>
      <BookList books={books} onDelete={handleDelete} />
    </div>
  );
}

export default BookListPage;
