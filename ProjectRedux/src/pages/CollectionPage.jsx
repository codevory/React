import React from 'react'

const CollectionPage = () => {
    const item = JSON.parse(localStorage.getItem('collection'))
  return (<div className='flex flex-wrap justify-between gap-3'>
    {item.map((item) => {
    return (
       <div key={item.id} className='w-[18vw] h-80  rounded-xl relative'>
     <a target='_blank' href={item.url} alt='src-link' className='cursor-pointer hover:scale-95'>
        {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt={item.title}></img> : ''}
        {item.type == 'gif' ? <img className='h-full w-full object-cover object-center' src={item.src} alt={item.title}></img> : ''}
        {item.type == 'video' ? <video className='h-full w-full object-cover object-center' src={item.src} alt={item.title}></video> : ''}
     </a>
<div id='bottom' className='flex justify-between gap-3  items-center absolute bottom-1  text-white'>
    <h1 className=' font-semibold'>{item.title}</h1>
    <button onClick={console.log(item)} className=' active:scale-90 active:bg-purple-400 w-20 h-12 rounded-xl p-2 bg-purple-500 font-bold'>Save</button>
</div>
    </div>
    )
  })}
  </div>)
}

export default CollectionPage
