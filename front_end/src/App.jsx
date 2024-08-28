import { useState } from 'react'
import './index.css'
import Login from './componenets/auth/login.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './componenets/auth/signup.jsx';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
       
      
    </>
  )
}

export default App
