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
    </Routes>
   
   
    <Footer/>
  </div>
  </Router>
  )
}

export default App
