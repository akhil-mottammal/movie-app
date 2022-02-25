import React, { Fragment } from 'react'
import './Popup.css'
import {imgUrl} from './Constants'

function Popup(props) {
    console.log(props)
    const close=()=>{
  props.setPopup(false)
    }
   let upcomingItem= props.upcoming.filter((item)=>{
        return item.title===props.popupItem
    }).map((item)=>{
        console.log(item)
        return (<Fragment>
            <img src={imgUrl+item.backdrop_path} alt='popup'/>
            <div className='popup-content'>
            <h2>{item.title}</h2>
            <p>{item.overview}</p>

        </div>
        </Fragment>
        )
    })
  return (<div className='color'>
    <div className='popup'>
         
        {upcomingItem}
         <i class="far fa-times-circle close" onClick={close}></i>
    </div>
    </div>
  )
}

export default Popup