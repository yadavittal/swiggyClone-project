import React from 'react'

function MenuCard({data}) {
    //  console.log(data);

  return (
    <article className='menuCards shadow-2xl'>
        <div className='menuDetailes'>
           <p className='cardTitle'><span>{data.name}</span></p>
           <p><span>&#8377;&nbsp;{data.price/100}</span></p>
           <div className='ratingDetailes'>
           <span>{<svg width="20" height="20"  viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="green" />
                  <path d="M12 2.5l2.89 6.14 6.49.59-4.84 4.41 1.56 6.36-5.62-3.5-5.62 3.5 1.56-6.36-4.84-4.41 6.49-.59L12 2.5z" fill="white" /></svg>}
           </span>
           <p><span>{data.ratings.aggregatedRating.rating}</span></p>
           </div>
           <p className='dataDescription'><span>{data.description}</span></p> 
        </div>
        <div className='menuImg'>
        <img src={`https:media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${data.imageId}`} className="cardImg"  alt="..."/>
        </div>
    </article>
  )
}
export default MenuCard
