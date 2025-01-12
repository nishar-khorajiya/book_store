import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BookForm from '../components/BookForm';

function BookAddEditPage() {
    const url=process.env.REACT_APP_BASE_URL
  const [form, setForm] = useState({
    title: '',
    authors: '',
    genre: '',
    publisher: '',
    publicationYear: '',
    edition: '',
    language: '',
    price: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchBook = async (id) => {
    const { data } = await axios.get(`${url}/books/${id}`);
    setForm(data);
  };

  useEffect(() => {
    if (id) {
      fetchBook(id);
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`${url}/books/${id}`, form);
    } else {
      await axios.post(`${url}/books`, form);
    }
    navigate('/books');
  };

  return (
    <div className="container py-4">
      {/* <h1>{id ? 'Edit Book' : 'Add New Book'}</h1> */}
      <BookForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default BookAddEditPage;
