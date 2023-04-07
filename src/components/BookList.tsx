import BookShow from './BookShow';
import useBooksContext from '../hooks/useBooksContext';

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
  // const { books } = useContext(BooksContext);
  const { books } = useBooksContext();
  const renderedBooks = books.map((book: BooksState) => {
    return (
      // <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
      <BookShow key={book.id} book={book} />
    );
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
