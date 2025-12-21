import { useState , useEffect} from 'react'


  const date = new Date();
  const currentDate =  date.toLocaleString('en-US',{
    year:'numeric',
    month:'numeric',
    day:'numeric',
  })

  const time = date.toLocaleString('en-us',{
    hour:'numeric',
    minute:'numeric',
    hour12:true
  })


const CreatePost = () => {
  const [title,setTitle] = useState('')
  const [category,setCategory] = useState('')
  const [content,setContent] = useState('')
const [copy,setCopy] = useState(() => {
  const savedPost = localStorage.getItem("postData")
  return savedPost ? JSON.parse(savedPost) : []
})


function handlepost(){
const postData = {
 'title':title,
 'category':category,
 'content':content,
 'date':currentDate,
 'time':time,
 'id':'art-' + Math.random().toString(36).substring(2,7),
 'createdAt':Date.now()

}
const updatedData = [...copy,postData]
setCopy(updatedData)
}
useEffect(() => {
  localStorage.setItem('postData',JSON.stringify(copy))
},[copy])

  return ( 
 <form onSubmit={(e) => {
  handlepost()
 e.preventDefault()
 setTitle('')
 setCategory('')
 setContent('')
 }}
 className='w-98vw h-2/3 m-4 bg-white text-black border-2 border-green-900 rounded-xl '>
 <div className='px-2 py-1'>
  <div className='flex justify-between px-2'>
    <div className='flex flex-col gap-1 w-[50%] '>
      <label for='title' className='text-[16px] font-semibold md:text-xl lg:text-2xl'>Enter your post Title</label>
      <input name='title' id='title' className='text-[15px] md:text-[18px] lg:text-xl h-10 w-2/3 rounded-sm' type='text' placeholder='Enter title for post' onChange={(e) => {setTitle(e.target.value)}} value={title} required />
    </div>
    <div className='flex text-black flex-col gap-1 w-[40%]'>
     <label for='category' className='text-[16px] font-semibold md:text-xl lg:text-2xl'>Select your category</label>
     <select value={category} onChange={(e) => {setCategory(e.target.value)}} name='category' id='category' required className=' text-xm md:text-[18px] lg:text-xl font-medium h-10'>
      <option name='select-option' aria-disabled>Select</option>
      <option name='education'aria-selected >Education</option>
      <option name='technology' aria-selected>Technology</option>
      <option name='language' aria-selected>Language</option>
      <option name='career guidance' aria-selected>Career Guidance</option>
     </select>
    </div>
  </div>
     <div className='flex justify-between items-center px-2'>
<span className='my-1  bg-gray-200 rounded-[7px] p-1'> Date :  {currentDate} </span>
<span className='my-1 bg-gray-200 rounded-[7px] p-1'> Time :  {time} </span>
</div>
<div className='h-2/2 m-2'>
  <textarea value={content} onChange={(e) => {setContent(e.target.value)}} className='w-[96%] h-[80%] outline-1 outline-cyan-200 rounded-[10px] p-2' placeholder='Write your content here' name='content-area' rows={13}  required>

  </textarea>
</div>
<div className='flex justify-center items-center'>
<button  className='w-40 h-10 bg-emerald-500 text-white font-bold rounded-[10px] active:bg-amber-400 active:scale-95'>Post</button>
</div> 
 </div>
    </form>

       )
}

export default CreatePost
