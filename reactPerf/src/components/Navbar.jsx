import React,{ useState, useCallback, useEffect } from 'react'

const Navbar = ({text,setText}) => {
    let timer;
    useEffect(() => {
    timer =  setTimeout(() => {
        console.log(`Fetching data for ${text} `)
        }, 700);
     return () => clearTimeout(timer)
    },[text])

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} type='search' />
    </div>    
  )
}  

export default Navbar


// const debounce = (text) => {
//     let timer;
//     timer = setTimeout(() => {
//         console.log(`{Fetching data for ${text} }`)
//     }, 1000);
//     return clearTimeout(timer)
// }