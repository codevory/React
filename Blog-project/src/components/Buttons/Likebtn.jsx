import { FcLikePlaceholder } from "react-icons/fc";
import { IconContext } from "react-icons/lib";
import {FaRegHeart,FaHeart} from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";


const Likebtn = (post) => {
    const posts = JSON.parse(localStorage.getItem("postData"))
    const { id } = useParams()
    const [likeCount ,setLikeCount] = useState(0)
    const [liked,setLiked] = useState(false)
    const data = posts.find(p => p.id == id)


    useEffect(() => {
        let updated = posts.map((post) => {
     if(post.id == data.id)
        return {
       ...post,
       engagementData :{
     ...post.engagementData,
     'likes':post.engagementData.likes + likeCount
       }
        }
        return post
        })
        localStorage.setItem("postData",JSON.stringify(updated))
    },[liked])

  return (
    <div className="flex gap-1 justify-center items-center h-13">
   <button onClick={() => {setLiked(!liked)
    {likeCount == 0 ? (setLikeCount(likeCount + 1)) : (setLikeCount(likeCount - 1))}
   }}>
{liked ? (<FaHeart size={26} color="red" />) : (<FaHeart size={24} color="black" className="active:scale-95" />)}
   </button>
   <span>{likeCount}</span>
    </div>
  )
}

export default Likebtn
