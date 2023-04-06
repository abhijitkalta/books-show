import { useState } from 'react';
interface bookState {
  id: number;
  title: string;
}
const BookEdit = ({
  book,
  onSubmit,
}: {
  book: bookState;
  onSubmit: Function;
}) => {
  const [title, setTitle] = useState(book.title);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(book.id, title);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input value={title} onChange={handleChange} className="input" />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
};

export default BookEdit;
