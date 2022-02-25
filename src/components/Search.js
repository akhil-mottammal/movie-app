import React,{Fragment, useState}from 'react';
import './Search.css'
import {imgUrl,apiKey} from "./Constants"

function Search() {
const [searchItem, setSearchItem] = useState([]);



 async function clickHandler(e){
if(e.key==="Enter"){
  console.log("enter works")
   
    let query=e.target.value;
    console.log(query)
    let responce= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`)
    console.log(responce)
    let data= await responce.json();
    console.log("data",data)
     let results=data.results
     setSearchItem(results)
}
  }
  let allSearched= searchItem.map((item,index)=>{
    if(index<2){
      return ( 
     <Fragment>
        <img className='img' src={imgUrl+item.poster_path} alt="img" key={index} />
        
        </Fragment>
      )
    }
   
 })
  
  return (<div className='search'>
      <p>search your faviourite movie here</p>
      <input type="text" placeholder='Enter movie name' onKeyPress={(e)=>{clickHandler(e)}}/>
             
    <div className='img-container'>
      { allSearched}
    </div>
  </div>);
}

export default Search;
