import { useState } from 'react'
import './index.css'
import Login from './componenets/auth/login.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './componenets/auth/signup.jsx';
import Header from './componenets/common_com/Homeheader.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import College from './pages/College.jsx';
import Contact from './pages/Contact.jsx';
// import HeadNav from  './componenets/module-comp/head-nav.jsx'
// import Uniheader from './componenets/university/Header.jsx';
import Landingpage from './componenets/university/landingpage.jsx';
import Module from './pages/module.jsx';
// import HeadNav from './componenets/module-comp/head-nav.jsx';
import Resources from './pages/resources.jsx';
function App() {

  return (

    <>
       
      <Router>
         <Header/>
        {/* <Home/>  */}
        {/* <Uniheader/> */}
        <HeadNav />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path="/Login" element={ <Login/>} />
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
