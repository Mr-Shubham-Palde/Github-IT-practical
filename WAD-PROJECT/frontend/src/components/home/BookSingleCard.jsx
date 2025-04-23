
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="card shadow-sm mb-4 border border-secondary rounded position-relative"
      onMouseEnter={(e) => e.currentTarget.classList.add('shadow')}
      onMouseLeave={(e) => e.currentTarget.classList.remove('shadow')}

      // we have mainly use this from the video but its use in when user hover on the card the shadow effects get generated 
    >
      <div className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 rounded m-2 fw-bold">
        {book.publishYear}
      </div>
      <div className="card-body">
        {/* <h6 className="text-muted">{book._id}</h6> */}

        <div className="d-flex align-items-center gap-2 my-2">
          <PiBookOpenTextLight className="text-danger fs-5" />
          <h5 className="mb-0">{book.title}</h5>
        </div>

        <div className="d-flex align-items-center gap-2 my-2">
          <BiUserCircle className="text-danger fs-5" />
          <h6 className="mb-0">{book.author}</h6>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3 px-1">
          <BiShow
            className="text-primary fs-4"
            role="button"
            onClick={() => setShowModal(true)}
          />
          
          <Link to={`/books/edit/${book._id}`}>
            <AiOutlineEdit className="text-warning fs-4" />
          </Link>
          <Link to={`/books/delete/${book._id}`}>
            <MdOutlineDelete className="text-danger fs-4" />
          </Link>
        </div>
      </div>

      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BookSingleCard;
