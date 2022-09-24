import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <>
    <Router>
    <Routes>
         <Route path='/' element={<SignUp/>} />
    </Routes>
    </Router>

 
    </>
  )
}

export default App


