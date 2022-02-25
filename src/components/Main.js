import React,{useEffect,useState} from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import Search from './Search';
import RowPost from './RowPost';
import {apiKey} from './Constants'
import Footer from './Footer';
import Testimonial from './Testimonial';

import Home from './Home'
import {BrowserRouter,Route,Routes,HashRouter} from 'react-router-dom'
import About from './About';


function Main() {
 
  
  return (<div>
    <HashRouter>
     <Navbar/>
     <Routes>

     <Route exact path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     </Routes>
     <Footer/>
     </HashRouter>
     
    
     
  </div>);
}

export default Main;
