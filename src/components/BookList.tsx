import BookShow from './BookShow';
interface BooksState {
  id: number;
  title: string;
}

const BookList = ({
  books,
  onDelete,
}: {
  books: BooksState[];
  onDelete: Function;
}) => {
  const renderedBooks = books.map((book: BooksState) => {
    return <BookShow key={book.id} book={book} onDelete={onDelete} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
