
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
  return (
    <div className="container mt-4">
      <div className="row g-4">
        {books.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item._id}>
            <BookSingleCard book={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksCard;
