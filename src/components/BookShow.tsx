import { useState } from 'react';
import BookEdit from './BookEdit';
const BookShow = ({
  book,
  onDelete,
  onEdit,
}: {
  book: { id: number; title: string };
  onDelete: Function;
  onEdit: Function;
}) => {
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleSubmit = (id: number, newTitle: string) => {
    setEdit(false);
    onEdit(id, newTitle);
  };
  let content = <h3>{book.title}</h3>;
  if (edit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }
  return (
    <div className="book-show">
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
