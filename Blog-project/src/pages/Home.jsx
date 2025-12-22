import { Route, Routes } from "react-router-dom"
import {useMemo , useState} from 'react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Posts from "../components/Posts"
import Sortpost from '../components/Sortpost'
import Search from '../components/Search'


const Home = () => {

  const dumy = [
    {
        "title": "Learn HTML ",
        "category": "Education",
        "content": "HTML is a markup language that web browsers use to interpret and compose text, images, and other material into visible or audible web pages. Default characteristics for every item of HTML markup are defined in the browser, and these characteristics can be altered or enhanced by the web page designer's additional use of CSS. Many of the text elements are mentioned in the 1988 ISO technical report TR 9537 Techniques for using SGML, which describes the features of early text formatting languages such as that used by the RUNOFF command developed in the early 1960s for the CTSS (Compatible Time-Sharing System) operating system. These formatting commands were derived from the commands used by typesetters to manually format documents. However, the SGML concept of generalized markup is based on elements (nested annotated ranges with attributes) rather than merely print effects, with separate structure and markup. HTML has been progressively moved in this direction with CSS.HTML is a markup language that web browsers use to interpret and compose text, images, and other material into visible or audible web pages. Default characteristics for every item of HTML markup are defined in the browser, and these characteristics can be altered or enhanced by the web page designer's additional use of CSS. Many of the text elements are mentioned in the 1988 ISO technical report TR 9537 Techniques for using SGML, which describes the features of early text formatting languages such as that used by the RUNOFF command developed in the early 1960s for the CTSS (Compatible Time-Sharing System) operating system. These formatting commands were derived from the commands used by typesetters to manually format documents. However, the SGML concept of generalized markup is based on elements (nested annotated ranges with attributes) rather than merely print effects, with separate structure and markup. HTML has been progressively moved in this direction with CSS.",
        "date": "12/20/2025",
        "time": "8:36 PM",
        "id": "art-imary",
        "createdAt": 1766243250979
    },
    {
        "title": "Learn CSS Now ",
        "category": "Education",
        "content": "HTML is a markup language that web browsers use to interpret and compose text, images, and other material into visible or audible web pages. Default characteristics for every item of HTML markup are defined in the browser, and these characteristics can be altered or enhanced by the web page designer's additional use of CSS. Many of the text elements are mentioned in the 1988 ISO technical report TR 9537 Techniques for using SGML, which describes the features of early text formatting languages such as that used by the RUNOFF command developed in the early 1960s for the CTSS (Compatible Time-Sharing System) operating system. These formatting commands were derived from the commands used by typesetters to manually format documents. However, the SGML concept of generalized markup is based on elements (nested annotated ranges with attributes) rather than merely print effects, with separate structure and markup. HTML has been progressively moved in this direction with CSS.",
        "date": "12/20/2025",
        "time": "8:36 PM",
        "id": "art-verge",
        "createdAt": 1766243277237
    },
    {
        "title": "Guidance to tourists for winter ",
        "category": "Career Guidance",
        "content": "We specialize in curating custom trips to ensure you have a truly unique experience and are given the personal attention needed to safely accomplish your goals in the backcountry. With our team of experienced guides as your steadfast companions, we empower you to forge a deep connection with nature, navigate untamed terrains, and uncover hidden wonders.",
        "date": "12/20/2025",
        "time": "8:36 PM",
        "id": "art-njcub",
        "createdAt": 1766243377351
    },
    {
        "title": "Tutorials for Html",
        "category": "Language",
        "content": "HTML is a markup language that web browsers use to interpret and compose text, images, and other material into visible or audible web pages. Default characteristics for every item of HTML markup are defined in the browser, and these characteristics can be altered or enhanced by the web page designer's additional use of CSS. Many of the text elements are mentioned in the 1988 ISO technical report TR 9537 Techniques for using SGML, which describes the features of early text formatting languages such as that used by the RUNOFF command developed in the early 1960s for the CTSS (Compatible Time-Sharing System) operating system. These formatting commands were derived from the commands used by typesetters to manually format documents. However, the SGML concept of generalized markup is based on elements (nested annotated ranges with attributes) rather than merely print effects, with separate structure and markup. HTML has been progressively moved in this direction with CSS.",
        "date": "12/22/2025",
        "time": "8:50 PM",
        "id": "art-45alh",
        "createdAt": 1766416856255
    }
]
  const [searchQuery, setsearchQuery] = useState("")
  const [sortedOrder,setSortedOrder] = useState("newest")
  const posts = JSON.parse(localStorage.getItem("postData")) || dumy

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
