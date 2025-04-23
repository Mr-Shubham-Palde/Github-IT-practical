import { AiOutlineClose } from 'react-icons/ai';// the react icons is used for the close button
import { PiBookOpenTextLight } from 'react-icons/pi';// the react-icons/pi is used for the book icon
import { BiUserCircle } from 'react-icons/bi';// the react-icons/bi is used for the user icon

const BookModal = ({ book, onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()} // the main use of this is jab user is modal ke andar click kare, to background click na ho aur modal accidentally close na ho. Isse modal ko control karna asaan hota hai.
        style={{
          width: '600px',
          maxWidth: '100%',
          height: '400px',
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <AiOutlineClose
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            fontSize: '28px',
            color: 'red',
            cursor: 'pointer',
          }}
          onClick={onClose}
        />
        <h2
          style={{
            width: 'fit-content',
            padding: '4px 12px',
            backgroundColor: '#fca5a5',
            borderRadius: '8px',
          }}
        >
          {book.publishYear}
        </h2>
        
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <PiBookOpenTextLight style={{ color: '#fca5a5', fontSize: '20px' }} />
          <h2 style={{ margin: '4px 0' }}>{book.title}</h2>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <BiUserCircle style={{ color: '#fca5a5', fontSize: '20px' }} />
          <h2 style={{ margin: '4px 0' }}>{book.author}</h2>
        </div>
        <p style={{ marginTop: '16px' }}>Anything You want to show</p>
        <p style={{ margin: '8px 0' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  );
};

export default BookModal;
