import { Route, Routes } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import CreatePost from "./createPost"
const Home = () => {
  return (
    <div className="bg-black text-white flex flex-col p-2 sm:p-4 md:p-6 gap-10">

<h1>Home page</h1>
<Footer />
    </div>
  )
}

export default Home
