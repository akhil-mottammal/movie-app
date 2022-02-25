import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
       
       <div className='logos'>
        <div>
          <p>connect with us</p></div> 
          <div className='flex'>
        <a href='https://www.instagram.com/films_collective/'target="_blank"><i class="fab fa-instagram logo "></i></a>
        <a href='https://t.me/filmscollective'target="_blank"><i class="fab fa-telegram-plane logo" ></i></a>
        <a href='https://www.youtube.com/c/FilmsCollective' target="_blank"><i class="fab fa-youtube logo"></i></a>
       </div>
       </div>
    </div>
  )
}

export default Footer