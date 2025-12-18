import { Link, useParams,useNavigate } from 'react-router-dom'
import {useEffect, useState } from 'react'


function EditPost(){
    const navigate = useNavigate()
    const [newTitle,setNewtitle] = useState('')
    const [newCont,setNewcont] = useState('')
    const [isRedirecting,setIsRedirecting] = useState(false)
    const { id } = useParams()
    const post = JSON.parse(localStorage.getItem("postData")) || []
    const data = post.find(a => a.id === id)

    //post update function starts here
    function handleUpdate(e){
        e.preventDefault()
       const updatedPost = post.map((p) => {
        if(p.id === data.id){
            return {
                ...p,
                'title':newTitle,
                'content':newCont
            }
        }
        return p;
       })
       localStorage.setItem("postData",JSON.stringify(updatedPost))
       alert("post data updated successfully ")
setIsRedirecting(true)      
 setTimeout(()=>{
      navigate('/blog')
       },1000)
    }


    //handle post update function ends here

    if(!data) return <h1>404 | Not article found</h1>
     useEffect(() => {
        if(data){
            setNewtitle(data.title)
            setNewcont(data.content)
        }
     },[])

     
          if (isRedirecting) {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'purple',
      color: 'white',
      fontSize: '24px',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%'
    }}>
      <h1>Redirecting to blog Page...</h1>
    </div>
  );
}
        return (
                <form  onSubmit={handleUpdate} className='p-1 h-full m-4 flex flex-col justify-between bg-amber-900 text-white'>
                 <div className='flex  justify-between mb-2'>
                    <span className='flex flex-col gap-1 w-full'>
 <label className='font-semibold text-2xl'>Set New Title</label>
 <input className='max-w-[70%] min-w-[40%] outline-amber-100 h-10 font-medium rounded-xl p-1 flex justify-center items-center border-white bg-gray-500 text-gray-100' type='text' value={newTitle} onChange={(e) => {setNewtitle(e.target.value)}} />
                    </span>
                    <span className='flex flex-col gap-1 mr-2'>
   <label className='text-2xl font-semibold'>Category</label>
    <span className='bg-gray-500 text-white rounded-xl font-medium px-3 py-2 w-38'>{data.category}</span>
                    </span>
             </div>
                <span className='flex flex-col gap-2 mt-2'>
                    <label className='text-2xl font-semibold'>Edit content</label>
                    <textarea className=' px-2 py-1' rows={12} cols={16} value={newCont} onChange={(e) => {setNewcont(e.target.value)}}>

                    </textarea>
                </span>
                <span className='flex justify-center items-center'>
                <button  className='bg-emerald-800 text-white font-semibold w-30 h-10 rounded p-3 m-2 flex justify-center items-center active:scale-95 cursor-pointer'>Update post</button>
                </span>
                </form>
        )

    }

   
   export default EditPost