import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elm.url} target='_blank'>
  <div  className='bg-gray-300 overflow-hidden rounded-b-xl h-40 w-44'>
  <img className='overflow-hidden h-full w-full object-cover'  src={props.elm.download_url} alt='idx'></img>
 </div>
 <h2 className='font-medium text-black text-center bg-gray-300 rounded-b-lg px-2'>{props.elm.author}</h2>
</a>
    </div>
  )
}

export default Card
