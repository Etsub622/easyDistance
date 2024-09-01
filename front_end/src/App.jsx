import { useState } from 'react'
import './index.css'
import Login from './componenets/auth/login.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './componenets/auth/signup.jsx';
import Header from './componenets/Homeheader.jsx';
import Home from './componenets/Home.jsx';
import About from './componenets/About.jsx';
import College from './componenets/College.jsx';
import Contact from './componenets/Contact.jsx';
import Landingpage from './componenets/university/landingpage.jsx';
function App() {

  return (

    <>
       
      <Router>
        
        {/* <Home /> */}
       
        {/* <Landingpage/> */}
        <Routes>
          <Route path="/" element={ <Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<Home/> } />
          <Route path ="/college" element ={<Landingpage/>}/>
          <Route path ="/contact" element ={<Contact/>}/>
          <Route path ="/about" element ={<About/>}/>
          <Route path = "/module" element = {<Module />} />
          <Route path='/resources' element = {<Resources />} />
        </Routes>
      </Router>
     
       
      
    </>
  )
}

export default App
