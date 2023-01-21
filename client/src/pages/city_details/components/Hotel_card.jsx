import React from 'react';
import classes from "./style.module.css"

function Hotel_card() {
return (
 <>
<div className = {classes.container}>
 <div className = {classes.hotelImg}>
 <div className = {classes.starLabel}>4.5 &#9733;</div>
<img src = "https://images.unsplash.com/photo-1570206986634-afd7cccb68d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsJTIwbmlnaHQlMjB2aWV3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className = {classes.image}/>
 </div>
 <div className = {classes.hotelDes}>
 <div className = {classes.hotelName}><h2>Rambagh palace</h2></div> 
 <div className = {classes.hoteladd}><p>On Planet Earth</p></div> 

 <div className = {classes.hotelPrice}><p>&#x20B9; 1,50,000</p></div>  
 <div className = {classes.hotelReviw}><p> Excellent</p></div>
 <div className = {classes.buttonClass}>
<div className = {classes.btnReview}><button type = "Reviews">Reviews</button></div> 
<div className = {classes.btnBookNow}> <button className = "btnBookNow">Book Now</button></div> 
 </div>
 </div>
 <div className = {classes.hotelMoreInfo}>
 <div className = {classes.hotelMoreInfocontainer}>
 <div className = {classes.freecanc}>Free Cancellation</div>
 <div className = {classes.parking}>Parking Available</div>
 <div className = {classes.swimming}>Swimming Pool</div>
 <div className = {classes.childeren}>Children Allowed</div>
 </div>
 </div>
 
</div>
 
 </>
 )
}

export default Hotel_card
