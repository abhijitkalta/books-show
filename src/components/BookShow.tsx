const BookShow = ({
  book,
  onDelete,
}: {
  book: { id: number; title: string };
  onDelete: Function;
}) => {
  const handleClick = () => {
    onDelete(book.id);
  };
  return (
    <div className="book-show">
      {book.title}
      <button onClick={handleClick} className="delete">
        Delete
      </button>
    </div>
  );
};

export default BookShow;
