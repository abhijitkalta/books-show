import BookShow from './BookShow';
import { useContext } from 'react';
import BooksContext from '../context/books';

interface BooksState {
  id: number;
  title: string;
}

// const BookList = ({
//   books,
//   onDelete,
//   onEdit,
// }: {
//   books: BooksState[];
//   onDelete: Function;
//   onEdit: Function;
const BookList = () => {
  const { books } = useContext(BooksContext);
  const renderedBooks = books.map((book: BooksState) => {
    return (
      // <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
      <BookShow key={book.id} book={book} />
    );
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
