import React from 'react';
import { Link } from 'react-router-dom';

function BookList({ books, onDelete }) {
  return (
    <div className="row g-3">
      {books.map((book) => (
        <div className="col-12 col-md-6 col-lg-4" key={book._id}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text"><strong>Authors:</strong> {book.authors.join(', ')}</p>
              <p className="card-text"><strong>Genre:</strong> {book.genre}</p>
              <p className="card-text"><strong>Publisher:</strong> {book.publisher}</p>
              <p className="card-text"><strong>Price:</strong> ₹{parseFloat(book.price).toFixed(2)}</p>
              <p className="card-text"><strong>Language:</strong> {book.language}</p>
              <p className="card-text"><strong>Publication Year:</strong> {book.publicationYear}</p>
              <p className="card-text"><strong>Edition:</strong> {book.edition}</p>
              <Link to={`/books/edit/${book._id}`} className="btn btn-warning me-2">Edit</Link>
              <button className="btn btn-danger" onClick={() => onDelete(book._id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
