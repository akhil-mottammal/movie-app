import React,{useState} from 'react';
import{ Link} from "react-router-dom"
import './Navbar.css'
function Navbar() {
    const[clas,setClas]= useState("")
    const[isMobile,setIsMobile]= useState(true)
    const clickHandler=()=>{
     setClas("hide")
     setIsMobile(false)
    }
    const closeHandler=()=>{
        setClas("")
        setIsMobile(true)
    }
  return (<div className='navbar'>
      <h2>Films Collective</h2>
      <div >
          <ul className={`navbar-link ${clas}` }>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li >
                  <Link to="/about">About</Link>
             </li>
             
          </ul>
          
      </div>
      <button >{ isMobile ?<i class="fas fa-align-justify hamburger" onClick={clickHandler}></i>:<i class="far fa-times-circle" onClick={closeHandler}></i>}</button>
      
  </div>);
}

export default Navbar;
