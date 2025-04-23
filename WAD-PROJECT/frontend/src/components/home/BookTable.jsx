
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';

import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered align-middle text-center">
        <thead className="table-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Publish Year</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id}>
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publishYear}</td>
              <td>
                <div className="d-flex justify-content-center gap-3">
                  
                  <Link to={`/books/edit/${book._id}`} className="text-warning">
                    <AiOutlineEdit size={24} />
                  </Link>
                  <Link to={`/books/delete/${book._id}`} className="text-danger">
                    <MdOutlineDelete size={24} />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
