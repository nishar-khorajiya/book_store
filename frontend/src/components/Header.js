import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
  return (
    <header className="bg-primary text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h3">Book Store</h1>
        <nav>
          <Link to="/books" className="text-white text-decoration-none">Books</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
