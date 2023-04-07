import { useState, useContext } from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../context/books';
// const BookShow = ({
//   book,
//   onDelete,
//   onEdit,
// }: {
//   book: { id: number; title: string };
//   onDelete: Function;
//   onEdit: Function;
const BookShow = ({ book }: { book: { id: number; title: string } }) => {
  const [edit, setEdit] = useState(false);
  const { deleteBookById } = useContext(BooksContext);
  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleDelete = () => {
    // onDelete(book.id);
    deleteBookById(book.id);
  };

  const handleSubmit = (id: number, newTitle: string) => {
    setEdit(false);
    // onEdit(id, newTitle);
  };
  let content = <h3>{book.title}</h3>;
  if (edit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }
  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/200/200`} alt="books" />
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button onClick={handleDelete} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
