import React from 'react'
import { Link, useParams , useNavigate} from 'react-router-dom'
import { useState } from 'react'
import Likebtn from './Buttons/Likebtn'


const Singleblog = () => {
   const [isRedirecting,setIsRedirecting] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()
    let post = JSON.parse(localStorage.getItem("postData")) || []


    let data = post.find(a => a.id === id)
         //delete post functions
    function deletePost(){
        const newItems = post.filter(item => item.id !== data.id)
        localStorage.setItem("postData",JSON.stringify(newItems))
        alert("Post deleted successfully")
        setIsRedirecting(true)
        setTimeout(() => {
            navigate('/')
        },2000)
    }


    post = JSON.parse(localStorage.getItem("postData")) || []
    data = post.find(a => a.id === id)

            
    if(isRedirecting){
         return <div className='absolute top-1/2 left-1/2'>
<h1 className=' text-2xl font-semibold '>Redirecting to Home Page...</h1>
        </div>
    }


    if(!data) return  <div className='flex flex-col gap-2 justify-center items-center absolute top-1/2 left-1/2 '>
    <h1 className='bg-red-700 text-white font-semibold w-full min-h-10 flex justify-center items-center p-2'> 404 | Article not Found </h1>
    <a className='bg-purple-700 text-white p-1 rounded-xl cursor-pointer active:scale-95 active:bg-amber-400 w-30 h-10 flex justify-center items-center font-semibold' href='/'>Return Home </a>
            </div>


  return (
     <div className=' flex flex-col  min-h-40  border-2 rounded-[7px] px-5 py-1 m-4 '>
          <div className='flex justify-between'>
        <span className='text-[17px] font-semibold md:text-xl md:font-stretch-50%' > {data.title}</span>
         <span className='text-[17px] font-semibold md:text-xl md:font-bold rounded-lg p-1'>{data.category}</span>
          </div>
          <div className='flex justify-between font-mono text-[14px]'>
            <span>{data.date}</span>
            <span>{data.time}</span>
          </div>
          <div className=''>
           <span className='text-[15px] font-sans md:text-xl'> {data.content}</span>
          </div>
          <span className='flex justify-between'>
            <span>
              <Likebtn />
            </span>
        <Link to={`/edit/article/${data.id}`}> <button  className='w-30 h-10 bg-green-600  font-semibold rounded cursor-pointer active:scale-95 p-3 m-2 flex justify-center items-center'>Edit</button></Link>
        <button onClick={deletePost}  className='bg-red-500 active:bg-red-800 cursor-pointer active:scale-95  font-semibold w-30 h-10 rounded p-3 m-2 flex justify-center items-center'>Delete post</button>
          </span>
       
        </div>

  )
}
export default Singleblog