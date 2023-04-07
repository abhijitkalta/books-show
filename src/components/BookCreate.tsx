import { useState, useContext } from 'react';
import BooksContext from '../context/books';

// const BookCreate = ({ onCreate }: any) => {
const BookCreate = () => {
  const [title, setTitle] = useState('');
  const { createBook } = useContext(BooksContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // onCreate(title);
    createBook(title);
    setTitle('');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={title}
          onChange={handleChange}
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
