import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from './booksSlice';
import { Link } from 'react-router-dom';

const BooksList = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div className='show-book'>
      <h2>List of</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <Link to='/edit-book' state={{ id, title, author }}>
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
