import React, { useEffect, useState } from 'react';//usestate ha ahe na react cha ek hook ahe jo state managae karto mhjne jo pan data aplyala component madhe dakhavaycha ahe to aplyala state madhe store karaycha ahe.
//useEffect ha react cha ek hook ahe jo component cha lifecycle manage karto. jya pramane component render hota tyach pramane useEffect madhe function execute hoto.
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';// Page navigation ke liye (React Router ka part hai)
import { MdOutlineAddBox } from 'react-icons/md';//Icon component hai — book add karne wale button ke liye ek plus-box icon.
import BooksTable from '../components/home/BookTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);// Loading done
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-center gap-3 mb-4">
        <button
          className="btn btn-info"
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className="btn btn-info"
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3">Books List</h1>
        <Link to="/books/create" className="btn btn-outline-primary">
          <MdOutlineAddBox style={{ fontSize: '32px' }} />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
