import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
interface BooksState {
  id: number;
  title: string;
}
const App = () => {
  const [books, setBooks] = useState<BooksState[]>([]);

  const deleteBookById = (id: number) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const editBookById = (id: number, newTitle: string) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      } else {
        return book;
      }
    });
    setBooks(updatedBooks);
  };

  const createBook = (title: string) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: title },
    ];
    setBooks(updatedBooks);
  };
  return (
    <div>
      <h1>Reading list</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
