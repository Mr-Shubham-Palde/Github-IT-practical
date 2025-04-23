import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className="container p-4">
      <BackButton />
      <h1 className="text-center my-4">Delete Book</h1>
      {loading && <Spinner />}
      
      <div className="d-flex justify-content-center">
        <div className="card border-primary rounded-xl" style={{ width: '600px' }}>
          <div className="card-body text-center">
            <h3 className="card-title mb-4">Are you sure you want to delete this book?</h3>
            <button
              className="btn btn-danger btn-lg w-100"
              onClick={handleDeleteBook}
            >
              Yes, Delete it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
