import React,{useState,useEffect} from 'react'
import Hero from './Hero';
import Search from './Search';
import RowPost from './RowPost';
import Testimonial from './Testimonial';
import {apiKey} from './Constants'
function Home() {
    const[upcoming,setUpcoming]=useState([])
    const[action,setAction]=useState([])
    const[adventure,setAdventure]=useState([])
    const[animation,setAnimation]=useState([])
    const[documentary,setDocumentary]=useState([])
    const[comedy,setComedy]=useState([])
    
  //upcoming movies 
    async function upcomings(){
      let responce= await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
      let data=await responce.json();
      let result=data.results
      setUpcoming(result)
    }
    //action movies
     async function actions(){
       let responce= await fetch("https://api.themoviedb.org/3/discover/movie?api_key=9344d10df76a6a24db1a3ffc5fc9832b&language=en-US&page=1&with_genres=28");
       let data= await responce.json();
       let result=data.results
       setAction(result)
     }
     //adventure movies
     async function adventures(){
      let responce= await fetch("https://api.themoviedb.org/3/discover/movie?api_key=9344d10df76a6a24db1a3ffc5fc9832b&language=en-US&page=1&with_genres=12");
      let data= await responce.json();
      let result=data.results
      setAdventure(result)
    }
    async function animations(){
      let responce= await fetch("https://api.themoviedb.org/3/discover/movie?api_key=9344d10df76a6a24db1a3ffc5fc9832b&language=en-US&page=1&with_genres=16");
      let data= await responce.json();
      let result=data.results
      setAnimation(result)
    }
    //documentary
    async function documentaries(){
      let responce= await fetch("https://api.themoviedb.org/3/discover/movie?api_key=9344d10df76a6a24db1a3ffc5fc9832b&language=en-US&page=1&with_genres=99");
      let data= await responce.json();
      let result=data.results
      setDocumentary(result)
    }
    //comedy
    async function comedies(){
      let responce= await fetch("https://api.themoviedb.org/3/discover/movie?api_key=9344d10df76a6a24db1a3ffc5fc9832b&language=en-US&page=1&with_genres=35");
      let data= await responce.json();
      let result=data.results
      setComedy(result)
    }
    
  
    useEffect(()=>{
      upcomings()
      actions()
      adventures()
      animations()
      documentaries()
      comedies()
    
    },[])
  return (
    <div>
       <Hero/>
     <Search/>
     <RowPost title="Upcoming" genres={upcoming}/>
     <RowPost title="Action" genres={action}/>
     <RowPost title="Documentary" genres={documentary}/>
     <RowPost title="Animation" genres={animation}/>
     <RowPost title="Adventure" genres={adventure}/>
     <RowPost title="Comedy" genres={comedy}/>
     <Testimonial/>
    </div>
  )
}

export default Home