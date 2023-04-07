import { useState, createContext, useCallback } from 'react';
import axios from 'axios';

interface BooksState {
  id: number;
  title: string;
}
const BooksContext = createContext({
  books: [{ id: 1, title: '' }],
  fetchBooks: async () => {},
  editBookById: async (id: number, title: string) => {},
  deleteBookById: async (id: number) => {},
  createBook: async (title: string) => {},
});

function Provider({ children }: { children: React.ReactNode }) {
  const [books, setBooks] = useState<BooksState[]>([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get('http://localhost:3002/books');
    setBooks(response.data);
  }, []);

  // const stableFetchBooks = useCallback(fetchBooks, []);
  const deleteBookById = async (id: number) => {
    await axios.delete(`http://localhost:3002/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const editBookById = async (id: number, newTitle: string) => {
    const response = await axios.put(`http://localhost:3002/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      } else {
        return book;
      }
    });
    setBooks(updatedBooks);

    // const updatedBooks = books.map((book) => {
    //   if (book.id === id) {
    //     return { ...book, title: newTitle };
    //   } else {
    //     return book;
    //   }
    // });
    // setBooks(updatedBooks);
  };

  const createBook = async (title: string) => {
    const response = await axios.post('http://localhost:3002/books', {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
    // const updatedBooks = [
    //   ...books,
    //   { id: Math.round(Math.random() * 9999), title: title },
    // ];
    // setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;
