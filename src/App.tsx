import { useState, useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';
import BooksContext from './context/books';

// interface BooksState {
//   id: number;
//   title: string;
// }
const App = () => {
  // const [books, setBooks] = useState<BooksState[]>([]);

  // const fetchBooks = async () => {
  //   const response = await axios.get('http://localhost:3002/books');
  //   setBooks(response.data);
  // };
  const { fetchBooks } = useContext(BooksContext);
  useEffect(() => {
    fetchBooks();
  }, []);

  // const deleteBookById = async (id: number) => {
  //   await axios.delete(`http://localhost:3002/books/${id}`);
  //   const updatedBooks = books.filter((book) => {
  //     return book.id !== id;
  //   });
  //   setBooks(updatedBooks);
  // };

  // const editBookById = async (id: number, newTitle: string) => {
  //   const response = await axios.put(`http://localhost:3002/books/${id}`, {
  //     title: newTitle,
  //   });
  //   const updatedBooks = books.map((book) => {
  //     if (book.id === id) {
  //       return { ...book, ...response.data };
  //     } else {
  //       return book;
  //     }
  //   });
  //   setBooks(updatedBooks);

  //   // const updatedBooks = books.map((book) => {
  //   //   if (book.id === id) {
  //   //     return { ...book, title: newTitle };
  //   //   } else {
  //   //     return book;
  //   //   }
  //   // });
  //   // setBooks(updatedBooks);
  // };

  // const createBook = async (title: string) => {
  //   const response = await axios.post('http://localhost:3002/books', {
  //     title,
  //   });
  //   const updatedBooks = [...books, response.data];
  //   setBooks(updatedBooks);
  //   // const updatedBooks = [
  //   //   ...books,
  //   //   { id: Math.round(Math.random() * 9999), title: title },
  //   // ];
  //   // setBooks(updatedBooks);
  // };
  return (
    <div>
      <h1>Reading list</h1>
      {/* <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} /> */}
      <BookList />
      {/* <BookCreate onCreate={createBook} /> */}
      <BookCreate />
    </div>
  );
};

export default App;
