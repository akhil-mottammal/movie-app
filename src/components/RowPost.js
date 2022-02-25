import React,{useEffect,useState} from 'react'
import './RowPost.css'
import {apiKey,imgUrl} from "./Constants"
import Popup from './Popup'
function RowPost(props) {
  
  const [popup,setPopup]=useState(false)
  const[popupItem,setPopupItem]=useState("")
 
  const showPopup=(title)=>{
    setPopup(true)
    setPopupItem(title)
    
  }
 

  return (
    <div className='rowpost'>
      {popup && <Popup setPopup={setPopup} popupItem={popupItem} upcoming={props.genres} />}
        <h2>{props.title}</h2>
        <div className='images'>
          
        {props.genres.map((item,index)=>{
          return  <img className='img' src={imgUrl+item.poster_path} alt="img" key={index} onClick={()=>showPopup(item.title)} />
        })}
    </div>
    
    
    </div>
  )
}

export default RowPost