import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Navbar from '../layout/Navbar';
import BooksList from '../features/BooksList';
import AddBook from '../features/AddBook';
import EditBooks from '../features/EditBooks';

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/show-book' element={<BooksList />} />
          <Route path='/add-book' element={<AddBook />} />
          <Route path='/edit-book' element={<EditBooks />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Index;
