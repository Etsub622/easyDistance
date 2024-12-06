import './index.css'
import Login from './componenets/auth/login.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './componenets/auth/signup.jsx';
// import Header from './componenets/common_com/Homeheader.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'
// import College from './componenets/College.jsx';
import Contact from './pages/Contact.jsx';
import Module from './pages/module.jsx'
import Landingpage from './componenets/university/landingpage.jsx';
// import DepCards from './componenets/module-comp/dep-cards.jsx';
// import ResBox from './componenets/resources-comp/res-box.jsx';

function App() {

  return (
    <>  
      <Router>
        <Routes>
          <Route path="/Login" element={ <Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/" element={<Home/> } />
          <Route path ="/Colleges" element ={<Landingpage/>}/>
          <Route path ="/contact" element ={<Contact/>}/>
          <Route path ="/about" element ={<About/>}/>
          <Route path = "/module" element = {<Module />} />
        </Routes>
      </Router>
     
       
      
    </>
  )
}

export default App
