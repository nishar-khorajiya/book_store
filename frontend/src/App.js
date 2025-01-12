import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookListPage from './pages/BookListPage';
import BookAddEditPage from './pages/BookAddEditPage';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-4">
        <Routes>
          <Route path="/" element={<BookListPage />} />
          <Route path="/books" element={<BookListPage />} />
          <Route path="/books/add" element={<BookAddEditPage />} />
          <Route path="/books/edit/:id" element={<BookAddEditPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
