import { Route, Routes } from "react-router-dom"
import {useMemo , useState} from 'react'
import Footer from "../components/BodyComponents/Footer"
import Navbar from "../components/BodyComponents/Navbar"
import Posts from "../components/PostComponents/Posts"
import Sortpost from '../components/FilterComponents/Sortpost'
import Search from '../components/FilterComponents/Search'
import Categorysorting from "../components/FilterComponents/Categorysorting"


const Home = () => {

  let dumy ;
  const [searchQuery, setsearchQuery] = useState("")
  const [sortedOrder,setSortedOrder] = useState("newest")
  const [categoryFilter,setCategoryFilter] = useState("")
  let posts = JSON.parse(localStorage.getItem("postData")) || []


  const sortedPost = useMemo(() => {
  let filteredPost = posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))

    filteredPost.sort((a,b)=>{
      if(sortedOrder === "newest") return b.createdAt - a.createdAt;
      return a.createdAt - b.createdAt;
    })
   
    return filteredPost
  },[searchQuery,sortedOrder,posts])

  let categSorted;
let FinalPosts = useMemo(() => {
categSorted = sortedPost.filter(post => post.category.toLowerCase().includes(categoryFilter.toLowerCase()))
return categSorted
},[categoryFilter,posts])

//check device width.
if(window.innerWidth < 350){
  alert("Kindly turn on the desktop mode for better view")
}

//if post category doesn't matches the category filter
  if(!categSorted){
    return (
       <div className='flex flex-col px-3 md:px-6 py-2 min-h-screen '>
        <div className=' flex justify-between items-center py-1 w-full'>

<span className='block ml-2 w-[40%]'>

             <Sortpost onSort={setSortedOrder} />
</span>

<span className='block ml-2 w-[25%]'>

      <Categorysorting onSort={setCategoryFilter} />
</span>

<span className='block mr-1 w-[40%] '>

             <Search onSearch={setsearchQuery} />
</span>


        </div>
        <div className='flex justify-center items-center font-semibold gap-3.5 mt-3'>
      <p>{`No match found for "${categoryFilter}"`}</p>
        </div>
    </div>
    )
  }
  //If post not matched on search will return paragraph
     if(!sortedPost.length) return(
      <div className='flex flex-col px-3 md:px-6 py-2 min-h-screen '>
        <div className=' flex justify-between items-center py-1 w-full'>

<span className='block ml-2 w-[40%]'>

             <Sortpost onSort={setSortedOrder} />
</span>
<span className='block mr-1 w-[40%] '>

             <Search onSearch={setsearchQuery} />
</span>

        </div>
        <div className='flex justify-center items-center font-semibold gap-3.5 mt-3'>
      <p>{`No match found for "${searchQuery}"`}</p>
        </div>
    </div>
     )

//Final return 
  return (
    <div className='flex flex-col px-3 md:px-6 py-2 min-h-screen '>
        <div className=' flex justify-between items-center py-1 w-full'>

<span className='block ml-2 w-[25%]'>

             <Sortpost onSort={setSortedOrder} />
</span>

<span className='block ml-2 w-[25%]'>

      <Categorysorting onSort={setCategoryFilter} />
</span>

<span className='block mr-1 w-[40%] '>

             <Search onSearch={setsearchQuery} />
</span>
          

        </div>
        <div className='flex flex-col gap-3.5'>
      <Posts posts={FinalPosts} />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default Home
