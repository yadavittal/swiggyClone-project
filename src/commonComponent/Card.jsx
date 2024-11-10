import React from "react";
import { useNavigate } from 'react-router-dom'

function Card({ myData }) {
  const navigate=useNavigate();
  return (
    <div className="card" onClick={()=>{
         navigate(`/menu/${myData.info.id}`)
    }}>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${myData.info.cloudinaryImageId}`}
        className="cardImg"
        alt="card-logo"
      />
      <div className="cardDatailes">
        <p className="cardTitle">
          <span>{myData.info.name}</span>
        </p>
      <div className="ratingContainer">  
        <p className="ratingIcon">
             <span>{<svg width="20" height="20" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="green" />
                  <path d="M12 2.5l2.89 6.14 6.49.59-4.84 4.41 1.56 6.36-5.62-3.5-5.62 3.5 1.56-6.36-4.84-4.41 6.49-.59L12 2.5z" fill="white" /></svg>}
              </span>
        </p>
        <p className="rating">
          <span>{myData.info.avgRating}</span>
        </p>
        <p>{myData.info.sla.slaString}</p>
      </div> 
        
        <p className="cardPrice">
          <span>{myData.info.cuisines}</span>
        </p>
        <p className="cardDesc">
          <span>{myData.info.locality}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
