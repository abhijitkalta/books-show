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

  const createBook = (title: string) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: title },
    ];
    setBooks(updatedBooks);
  };
  return (
    <div>
      App
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
