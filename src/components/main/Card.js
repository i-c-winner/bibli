import React, { useState, useEffect } from 'react';
import * as cards from '../../constans/constans';


function Card (props) {  
  return (
    <div className="cards shadow ">
      <div className="alert main__title alert-primary" role="alert">
  {props.type}
</div>
    <div className="main__cards row d-flex justify-content-between">
      
    {
      cards.list.webSites.map(function(element, i){
       console.log(element, i);
     return (
       
          i<3?
          <div className="card main__card rounded-sm shadow-sm" >
            
  <img src={element[i].imgUrl} className="card-img-top" alt="..." />
  <div className={element[i].link}>
  
    
        <a href="#" className="btn btn-primary">{element[0].title}</a>
  </div>
  
</div>:<></>
      
     )

      })
    }

   
    </div>    
     <button type="button" className="btn main__btn btn-primary text-right">Больше...</button>
   
 </div> ) 
  }

export default Card;