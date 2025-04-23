import React from 'react';//React ko import kiya** kyunki bina iske hum React component (`App`) nahi bana sakte.
import { Routes, Route } from 'react-router-dom';//React Router ko import kiya** kyunki isse hum routing kar sakte hain.
import Home from './pages/Home'
import CreateBook from './pages/CreateBooks'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'


const App = () => {
  return (
    <Routes>
      {/*  ye ek wrapper hai jo sabhi Route ko andar leta hai.
          Route: ye decide karta hai ki kaunsa component kis URL pe dikhana hai. bcoz of this the main routing in frontend happens */}
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  )
}

export default App