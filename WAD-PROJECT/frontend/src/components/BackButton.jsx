import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Link
        to={destination}
        style={{
          backgroundColor: '#075985',
          color: 'white',
          padding: '4px 16px',
          borderRadius: '8px',
          width: 'fit-content',
          display: 'inline-flex',
          alignItems: 'center',
          textDecoration: 'none'
        }}
      >
        <BsArrowLeft style={{ fontSize: '24px' }} />
      </Link>
    </div>
  );
};

export default BackButton;
