import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const intialBooks = {
  books: [
    { id: uuidv4(), title: 'Your Name', author: 'Md Fahim' },
    { id: uuidv4(), title: 'Your lie in April', author: 'Md Fahim' },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState: intialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExit = state.books.filter((book) => book.id === id);

      if (isBookExit) {
        isBookExit[0].title = title;
        isBookExit[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } =
  booksSlice.actions;
export default booksSlice.reducer;
