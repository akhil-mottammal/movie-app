import React from 'react';
import "./Hero.css"
//https://api.themoviedb.org/3/movie/top_rated?api_key=9344d10df76a6a24db1a3ffc5fc9832b&language=en-US&page=1
function Hero() {
  return (<div className='hero-container'>
      <div className='hero-content'>
          <h1>MONEY HEIST</h1>
          <p>Crime drama</p>
          
          <div className='underline'></div>
          <p className='description'>A criminal mastermind who goes by "The Professor" 
               has a plan to pull off the biggest heist in recorded history -- to print billions
              of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he
             recruits eight people with certain abilities and who have nothing to lose. The group
             of thieves take hostages to aid in their negotiationswith the authorities, who
             strategize to come up with a way to capture The Professor. As more time elapses,
             the robbers prepare for a showdown with the police..</p>
      </div>
      <div className='fade'></div>
  </div>);
}

export default Hero;

