import { Route, Routes } from "react-router-dom"
import {useMemo , useState} from 'react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Posts from "../components/Posts"
import Sortpost from '../components/Sortpost'
import Search from '../components/Search'


const Home = () => {

  let dumy ;
  const [searchQuery, setsearchQuery] = useState("")
  const [sortedOrder,setSortedOrder] = useState("newest")
  let posts = JSON.parse(localStorage.getItem("postData")) || []
  // if(posts.length <= 0){
  //   localStorage.setItem("postData",JSON.stringify(dumy))
  // }
  // else{
  //   posts = posts;
  // }


  const finalPosts = useMemo(() => {
    let filteredPost = posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))

    filteredPost.sort((a,b)=>{
      if(sortedOrder === "newest") return b.createdAt - a.createdAt;
      return a.createdAt - b.createdAt;
    })
    return filteredPost
  },[searchQuery,sortedOrder,posts])

  return (
    <div className='flex flex-col px-6 py-2 min-h-screen '>
        <div className=' flex justify-between items-center py-1 w-full'>

<span className='block ml-2 w-[40%]'>

             <Sortpost onSort={setSortedOrder} />
</span>
<span className='block mr-1 w-[40%] '>

             <Search onSearch={setsearchQuery} />
</span>
          

        </div>
        <div className='flex flex-col gap-3.5'>
      <Posts posts={finalPosts} />
        </div>
    </div>
  )
}

export default Home
