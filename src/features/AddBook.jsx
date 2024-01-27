import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './booksSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const book = { id: uuidv4(), title, author };
    e.preventDefault();
    dispatch(addBook(book));
    navigate('/show-book', { replace: true });
  };

  return (
    <div>
      <h2>Add books</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Title: </label>
          <input
            type='text'
            id='title'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='author'>Author: </label>
          <input
            type='text'
            id='author'
            name='author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
