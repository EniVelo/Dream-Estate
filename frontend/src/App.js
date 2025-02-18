import React, { useState, useEffect } from 'react'
import Axios from "axios"; //send request to backend
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import About from "./Components/About";
import Create from "./Components/CRUD/Create";
import Footer from "./Components/Footer";
import Read from "./Components/CRUD/Read";
import ReadOne from "./Components/CRUD/ReadOne";
import Update from "./Components/CRUD/Update";
import LuxurySeasideVilla from './Components/LuxurySeasideVilla'; 
import Vila2 from './Components/Vila2'; 
import Vila3 from './Components/Vila3'; 
import Vila4 from './Components/Vila4';
import Vila5 from './Components/Vila5';
import Vila6 from './Components/Vila6';
import Vila7 from './Components/Vila7';
import Vila8 from './Components/Vila8';
import Vila9 from './Components/Vila9';


const App = () => {
  const [data,setData]=useState("");
  
  const getData=async()=>{
    const response=await Axios.get("http://localhost:5000/getData");
    setData(response.data);
  }

  useEffect(()=>{
getData()
  },[]);
  
  return (
    <Router>
    <div>
      <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/create" element={<Create />} />
      <Route path="/read" element={<Read />} />
      <Route path="/ReadOne/:id" element={<ReadOne />} />
      <Route path="/Update/:id" element={<Update />} />
   
      <Route path="/luxury-seaside-villa" element={<LuxurySeasideVilla />} />
      <Route path="/vila2" element={<Vila2 />} />
      <Route path="/vila3" element={<Vila3 />} />
      <Route path="/vila4" element={<Vila4 />} />
      <Route path="/vila5" element={<Vila5 />} />
      <Route path="/vila6" element={<Vila6 />} />
      <Route path="/vila7" element={<Vila7 />} />
      <Route path="/vila8" element={<Vila8 />} />
      <Route path="/vila9" element={<Vila9 />} />
    </Routes>
   
   
    <Footer/>
  </div>
  </Router>
  )
}

export default App
