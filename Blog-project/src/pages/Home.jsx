import { Route, Routes } from "react-router-dom"
import {useMemo , useState} from 'react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Posts from "../components/Posts"
import Sortpost from '../components/Sortpost'
import Search from '../components/Search'


const Home = () => {

  let dumy = [
    {
        "id": "art-6a06b59e-554d-407d-b93c-fec8d68146ef",
        "title": "1️⃣ The Power of Consistency",
        "category": "Education",
        "content": "Consistency is often underestimated, yet it plays a huge role in long-term success. Small actions repeated daily compound into meaningful results over time. Whether you are learning to code, building a habit, or improving your health, showing up regularly matters more than intensity. Many people quit early because progress feels slow, but consistency quietly works in the background. Even 30 minutes a day can outperform irregular bursts of effort. The key is to create a routine that fits your lifestyle and stick to it patiently. Progress may be invisible at first, but it always reveals itself eventually.let it be",
        "date": "12/23/2025",
        "time": "10:22 PM",
        "createdAt": 1766508783086,
        "engagementData": {
            "likes": 5,
            "likedBy": []
        }
    },
    {
        "id": "art-5f20231b-f97d-493c-8187-fa7fb51f8485",
        "title": "2️⃣ Why Learning Never Stops",
        "category": "Education",
        "content": "Learning does not end with school or college—it evolves with time. In today’s fast-changing world, new skills are constantly emerging, especially in technology. People who keep learning stay adaptable and relevant. Learning also improves confidence and problem-solving ability. It doesn’t always mean formal education; reading, experimenting, and building projects count too. Even failures teach valuable lessons. The mindset of continuous learning keeps curiosity alive and helps individuals grow personally and professionally. When learning becomes a habit, growth becomes a natural outcome rather than a forced effort.",
        "date": "12/23/2025",
        "time": "10:22 PM",
        "createdAt": 1766508865143,
        "engagementData": {
            "likes": 2,
            "likedBy": []
        }
    },
    {
        "id": "art-6a6b8e86-b0f3-4cf8-abe2-2d413cf7ddd4",
        "title": "3️⃣ The Importance of Time Management",
        "category": "Education",
        "content": "Time is one resource everyone has equally, yet people use it very differently. Effective time management helps reduce stress and improve productivity. Planning tasks, setting priorities, and avoiding distractions can dramatically change daily output. Instead of multitasking, focusing on one task at a time improves quality and speed. Tools like to-do lists and calendars make work more organized. Managing time well doesn’t mean working all day—it means working smartly and leaving space for rest. When time is respected, goals become easier to achieve and life feels more balanced.",
        "date": "12/23/2025",
        "time": "10:22 PM",
        "createdAt": 1766508880738,
        "engagementData": {
            "likes": 6,
            "likedBy": []
        }
    },
    {
        "id": "art-70791b73-11ff-432c-b1aa-4b8d32050254",
        "title": "4️⃣ Building Skills Through Practice",
        "category": "Career Guidance",
        "content": "Skills are not built by reading alone; they grow through consistent practice. Whether it’s coding, writing, or problem-solving, hands-on experience strengthens understanding. Mistakes are part of the learning process and should not be feared. Each error highlights gaps that need improvement. Practicing regularly builds confidence and sharpens intuition. Over time, things that once felt difficult become natural. The key is to start small, practice often, and stay patient. Skill-building is a journey, and steady effort always beats talent without practice.",
        "date": "12/23/2025",
        "time": "10:22 PM",
        "createdAt": 1766508896692,
        "engagementData": {
            "likes": 25,
            "likedBy": []
        }
    },
    {
        "id": "art-f3617ac5-1918-4450-9dc1-c888e3b486ba",
        "title": "5️⃣ The Role of Discipline in Success ",
        "category": "Career Guidance",
        "content": "Motivation comes and goes, but discipline stays. Discipline helps people continue working even when motivation fades. It creates structure and accountability in daily life. Successful individuals rely more on habits than emotions. Discipline doesn’t mean being harsh—it means staying committed to your goals. Simple routines like fixed study hours or daily reviews can create massive impact over time. With discipline, progress becomes predictable. When actions are guided by discipline, success becomes a result rather than a coincidence.",
        "date": "12/23/2025",
        "time": "10:22 PM",
        "createdAt": 1766508915604,
        "engagementData": {
            "likes": 7,
            "likedBy": []
        }
    },
    {
        "id": "art-84ea2633-48cd-433f-a583-dbb220474d13",
        "title": "6️⃣ Why Simplicity Works",
        "category": "Education",
        "content": "Simplicity is powerful in a world full of complexity. Simple solutions are easier to understand, maintain, and improve. Whether in design, coding, or daily decisions, simplicity reduces confusion and errors. Overcomplicating things often leads to delays and frustration. Clear goals and simple plans increase execution speed. Focusing on what truly matters helps eliminate unnecessary distractions. Simplicity does not mean lack of depth—it means clarity of purpose. When things are simple, consistency and progress become much easier to sustain.",
        "date": "12/23/2025",
        "time": "10:22 PM",
        "createdAt": 1766508941158,
        "engagementData": {
            "likes": 10,
            "likedBy": []
        }
    }
]
  const [searchQuery, setsearchQuery] = useState("")
  const [sortedOrder,setSortedOrder] = useState("newest")
  let posts = JSON.parse(localStorage.getItem("postData")) || []
  if(posts.length <= 0){
    localStorage.setItem("postData",JSON.stringify(dumy))
  }
  else{
    posts = posts;
  }


  const finalPosts = useMemo(() => {
    let filteredPost = posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))

    filteredPost.sort((a,b)=>{
      if(sortedOrder === "newest") return b.createdAt - a.createdAt;
      return a.createdAt - b.createdAt;
    })
    return filteredPost
  },[searchQuery,sortedOrder,posts])

  return (
    <div className='flex flex-col px-6 py-2 bg-white min-h-screen '>
        <div className='flex justify-between items-center py-1 w-full'>

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
