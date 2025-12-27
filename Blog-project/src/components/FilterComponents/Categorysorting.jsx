import React,{ useState} from 'react'

const Categorysorting = ({ onSort }) => {

 return (
    <div>
     <select className='md:max-w-2/3 w-full h-10 px-2 py-1 rounded border-2 dark:bg-zinc-900 overflow-hidden ' onChange={(e) => {onSort(e.target.value)}}>
        <option >Select</option>
        <option value={"Guidance"}>Guidance</option>
        <option value={"Education"}>Education</option>
        <option value={"Language"}>Language</option>
        <option value={"Technology"}>Technology</option>
    
                </select>

    </div>
 )
}

export default Categorysorting
