import { Link, useParams,useNavigate } from 'react-router-dom'
import {useEffect, useState } from 'react'


function EditPost(){
    const navigate = useNavigate()
    const [newTitle,setNewtitle] = useState('')
    const [newCont,setNewcont] = useState('')
    const [isRedirecting,setIsRedirecting] = useState(false)
    const { slug } = useParams()
    const post = JSON.parse(localStorage.getItem("postData")) || []
    const data = post.find(a => a.slug === slug)

    //post update function starts here
    function handleUpdate(e){
        e.preventDefault()
       const updatedPost = post.map((p) => {
        if(p.slug === data.slug){
                      if(newTitle != p.title || newCont != p.content){
                                           alert("post data updated successfully ")                       
                        return {
                            ...p,
                            'title':newTitle,
                            'content':newCont
                        }
                      }
                      else{
                        alert("Nothing was updated")
                      }
                    }
                    return p;
                  })
   localStorage.setItem("postData",JSON.stringify(updatedPost))
setIsRedirecting(true)      
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
            setTimeout(() => {
              navigate('/')
            }, 500);
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      color: 'black',
      fontSize: '24px',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%'
    }}>
      <p className='bg-blue-800 text-white w-auto h-13 flex justify-center items-center p-2 font-semibold rounded-[9px] active:scale-95 cursor-auto'>Returning to Home</p>
    </div>
  );
}
        return (
                <form  onSubmit={handleUpdate} className='p-1 h-full m-4 flex flex-col justify-between'>
                 <div className='flex  justify-between mb-2'>
                    <span className='flex flex-col gap-1 w-full'>
 <label htmlFor='title' className='font-semibold text-[19px] md:text-xl '>Set New Title</label>
 <input id='title' className='max-w-[70%] min-w-[40%] outline-amber-100 h-10 font-sans rounded-[10px] p-1 flex justify-center items-center border-white outline-0' type='text' value={newTitle} onChange={(e) => {setNewtitle(e.target.value)}} />
                    </span>
                    <span className='flex flex-col gap-1 mr-2'>
   <p  className='text-[19px] font-semibold'>Category</p>
    <span className=' rounded-[10px] font-sans px-3 py-2 w-38 cursor-not-allowed'>{data.category}</span>
                    </span>
             </div>
                <span className='flex flex-col gap-2 mt-2'>
                    <label htmlFor='content-description' className='text-2xl font-semibold'>Edit content</label>
                    <textarea id='content-description' className=' px-2 py-1' rows={12} cols={16} value={newCont} onChange={(e) => {setNewcont(e.target.value)}}>

                    </textarea>
                </span>
                <span className='flex justify-center items-center'>
                <button  className='bg-emerald-800 text-white font-semibold w-30 h-10 rounded p-3 m-2 flex justify-center items-center active:scale-95 cursor-pointer'>Update post</button>
                </span>
                </form>
        )

    }

   
   export default EditPost