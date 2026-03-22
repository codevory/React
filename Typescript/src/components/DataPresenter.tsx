import '../App.css'

interface DataPresenterProps {
id:number;
title:string;
price:number;
rating:number;
description:string;
category:string;
tags:string[];
image:string;
dataLen:number;
}

const DataPresenter = ({dataLen,id,title,price,rating,description,category,tags,image}:DataPresenterProps) => {

  if(dataLen === 0) return <div className='page'>
    <h2>No data found </h2>
    <p>Search above eg. phone,laptops etc</p>
   </div>

  return (
    <div className="dataOuter">
      <img src={image} alt={title} />

      <div className="divCol">
           <div className="divFlex">
             <h3>{title}</h3> 
              <p>{`❇️${rating}`}</p>
            </div>
         <p>{description.slice(0,80)}</p>
      </div>

      <div className="divFlex">
      <p>{category}</p>
      <p>{`$${price}`}</p>
      </div>
      
      {/* <span>{tags}</span> */}
    </div>
  )
}

export default DataPresenter
