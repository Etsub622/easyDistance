import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
