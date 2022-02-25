import React,{useState} from 'react'
import './Testimonial.css'
import { openion} from './TestimonialData'

function Testimonial() {
     let [active,setActive]=useState("")
    let[review,setReview]=useState(openion[0])
    function carousel(index){
setReview(openion[index])
setActive("active")
    }
  return (
    <div className="testimonial">
        <h2>Our Reviews</h2>
        <div className='card'>
          <div className='img'></div>
            <img src={review.img} alt='person'/>
            <div className='card-detail'>
             <h4>{review.name}</h4>
             <p> {review.discription}</p>
             <div className='btns'>
             <span className={`btn ${active}`} onClick={()=>carousel(0)}></span>
             <span className={`btn ${active}`}onClick={()=>carousel(1)} ></span>
             <span className={`btn ${active}`} onClick={()=>carousel(2)}></span>
             
             </div>
            </div>
            

        </div>
        
    </div>
  )
}

export default Testimonial